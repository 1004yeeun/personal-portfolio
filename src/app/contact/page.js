"use client";
import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [renderTs, setRenderTs] = useState("");
    const sendingRef = useRef(false);

    useEffect(() => {
        setRenderTs(String(Date.now()));
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        if (sendingRef.current) return;
        sendingRef.current = true;

        setStatus("loading");
        setErrorMsg("");
        const form = e.currentTarget;

        const formData = new FormData(form);
        formData.set("ts", renderTs);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/josn" },
                body: JSON.stringify(data),
            });
            const json = await res.json().catch(() => ({}));

            if (res.ok && json.ok) {
                form.reset();
                setRenderTs(String(Date.now()));
                setStatus("ok");
            } else {
                setStatus("err");
                setErrorMsg(json?.error || "Something went wrong.");
            }
        } catch (err) {
            setStatus("err");
            setErrorMsg("Network error. Please email me directly.");
        } finally {
            sendingRef.current = false;
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />

            <section className="max-w-3xl mx-auto py-12 pt-30 md:pt-25 text-center">
                <h1 className="text-3xl font-bold mb-4 text-black">Contact Me</h1>
                <p className="text-gray-700">
                    I&apos;m a UCLA senior in Computer Science, Linguistics, and Cognitive Science who builds full-stack products with care for UI and real users. My projects span web apps, NLP tools, and game design. I&apos;ve worked as an interpreter at K-pop concerts and Korean business conventions, which sharpened my ability to communicate clearly in high-pressure settings — a skill I bring to every engineering project. I&apos;m reliable, fast to learn, and focused on growing as a software engineer who ships reliable, impactful solutions.
                </p>
                <h2 className="text-black mb-6 font-extrabold">
                    Let&apos;s connect! I&apos;m always open to opportunities in software engineering, collaboration on projects, or just to chat about tech or linguistics!
                </h2>

                <form onSubmit={onSubmit} className="space-y-4 text-black pb-5" aria-busy={status==="loading"}>
                    <div className="hidden">
                        <label htmlFor="website">Website</label>
                        <input
                            id="website"
                            name="website"
                            type="text"
                            tabIndex="-1"
                            autoComplete="off"
                        />
                    </div>

                    <input type="hidden" name="ts" value={renderTs} readOnly />

                    <input name="name" placeholder="Your name" required className="w-full rounded border p-2" />
                    <input name="email" type="email" placeholder="you@example.com" required className="w-full rounded border p-2" />
                    <textarea name="message" rows={5} placeholder="How can I help?" required className="w-full rounded border p-2" />
                    <button disabled={status==="loading"} className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 hover:bg-[#93908c] transition font-bold">
                        {status==="loading" ? "Sending..." : "Send"}
                    </button>

                    <div className="min-h-6" aria-live="polite">
                        {status==="ok" && <p className="text-green-700 mt-2">Thanks! I&apos;ll get back to you soon.</p>}
                        {status==="err" && <p className="teext-red-700 mt-2">{errorMsg}</p>}
                    </div>
                </form>

                <div className="flex justify-center gap-6 mb-8 text-3xl">
                    <a href="mailto:joycejeoung@ucla.edu" className="text-black hover:text-[#93908c] transition">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/joycejeoung" target="_blank" className="text-black hover:text-[#93908c] transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/1004yeeun" target="_blank" className="text-black hover:text-[#93908c] transition">
                        <FaGithub />
                    </a>
                </div>
            </section>
        </main>
    );
};