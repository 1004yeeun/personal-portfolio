import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Payload = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(200),
    message: z.string().min(1).max(5000),
    website: z.string().optional(),
    ts: z.string().optional(),
});

const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const LIMIT = 5;

export async function POST(req: Request) {
    try {
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown-i[";
        const now = Date.now()
        const entry = hits.get(ip) ?? { count: 0, ts: now };
        if (now - entry.ts > WINDOW_MS) {
            entry.count = 0;
            entry.ts = now;
        }
        entry.count += 1;
        hits.set(ip, entry);
        if (entry.count > LIMIT) {
            return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
        }

        const body = await req.json();
        const parsed = Payload.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { ok: false, error: "Invalid input", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, message, website, ts } = parsed.data;

        if (website && website.trim() !== "") {
            return NextResponse.json({ ok: true });
        }

        if (ts) {
            const renderedAt = Number(ts);
            if (!Number.isNaN(renderedAt)) {
                const delta = now - renderedAt;
                if (delta < 1200) {
                    return NextResponse.json({ ok: true });
                }
                if (delta > 1000 * 60 * 60 * 24) {
                    return NextResponse.json({ ok: false, error: "Form expired" }, { status: 400 });
                }
            }
        }

        const subject = `[Portfolio] New message from ${name}`;
        const text = `From: ${name} <${email}>\n\n${message}`;
        const html =
            `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#111">
                <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
                <p><strong>Message:</strong></p>
                <div>${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
            </div>`;
        
        const { data, error } = await resend.emails.send({
            from: `Joyce <onboarding@resend.dev>`,
            to: process.env.CONTACT_TO!,
            replyTo: email,
            subject,
            text,
            html,
            tags: [{ name: "source", value: "portfolio" }],
        });

        if (error) {
            return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
        }

        return NextResponse.json({ ok: true, id: data?.id ?? null });
        } catch (e: any) {
            return NextResponse.json({ ok: false, error: e?.message ?? "Server error" }, { status: 500 });
    }
}

export async function GET() {
  return NextResponse.json({
    ping: "ok",
    hasKey: !!process.env.RESEND_API_KEY,
    hasTo: !!process.env.CONTACT_TO,
  });
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}