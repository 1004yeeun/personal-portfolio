import React from "react";
import Image from "next/image";
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

const AboutSection = () => {
    return (
        <div className={satoshi.className}>
            <div className="items-center py-6 px-4 sm:py-4 md:py-0 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="Joyce Jeoung"
                    decoding="async"
                    data-nimg="fill"
                    className="mx-auto py-0 md:py-8"
                    width={400}
                    height={400}
                />
            </div>
            <h2 className="font-bold text-center text-black text-2xl pb-3 sm:pt-4 md:pt-0">a little bit about me...</h2>
            <div>
                <div className="text-black py-2 px-5 xl:gap-16 sm:py-5 xl:px-16 md:py-0 items-center">
                    <p>
                        I began my academic journey in the life sciences, but over time I discovered a deep passion for software engineering.
                        Drawn to the logic, creativity, and impact of programming, I transitioned into CS with a strong interest in backend development, systems programming, and building tools that solve real problems.
                        I'm currently majoring in Computer Science, Linguistics, and Cognitive Science at UCLA, where I've been building skills in both technical problem-solving and cross-disciplinary thinking.
                        I bring curiosity, adaptability, and persistence to every project I take on.
                    </p>
                    <br />
                    <p>
                        I've worked on projects that range from full-stack development to natural language processing and game design. 
                        Some highlights include:
                    </p>
                    <br />
                    <ul className="list-disc list-inside space-y-2 ml-10 mr-10">
                        <li className="flex items-start gap-2">
                            <span className="text-xl">🥘</span>
                            <p>
                                <strong>Foodie Fam</strong> — a food-sharing web app built with the MERN stack, featuring real-time feed updates, searchable restaurant indexing, and fast performance through optimized MongoDB queries.
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-xl">🎬</span>
                            <p>
                                <strong>Slice</strong> — a web-based video cropping tool using FFmpeg.js, with secure authentication, instant preview, and client-side exporting.
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-xl">🎮</span>
                            <p>
                                <strong>Marble Madness</strong> — a 2D maze game in C++ with dynamic maze generation and collision detection using OOP principles.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>
                        Alongside engineering, I designed, built, and continue to maintain this personal portfolio website using <strong>Next.js, React (JavaScript/JSX, TypeScript), Tailwind CSS, and Vercel</strong>, as well as a custom WordPress website for a pre-medical organization. 
                        In both, I applied responsive design, accessibility, and front-end best practices.
                        Through these experiences, I've become comfortable working across the stack, collaborating in version-controlled environments, and building tools that solve real problems.
                    </p>
                    <br />
                    <p>
                        I have a strong foundation in <strong>algorithms and data structures</strong>, and am currently expanding my knowledge of AI technologies.
                        Beyond code, I bring strong communication skills developed through my experience as an interpreter at K-pop concerts and international business conventions.
                        Working under pressure taught me how to stay clear, fast, and reliable — strengths I know carry into engineering teamwork and problem-solving.
                    </p>
                    <br />
                    <p> 
                        Looking ahead, I'm eager to contribute as a software engineering intern and grow into a developer who builds reliable, impactful solutions that make technology simpler and more accessible!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;