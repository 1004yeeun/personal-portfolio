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
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-3 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="Joyce Jeoung"
                    decoding="async"
                    data-nimg="fill"
                    className=""
                    width={500}
                    height={400}
                />
                <div className="text-black">
                    <h2 className="text-[#a19595] pt-4 pb-1 font-semibold">About Me</h2>
                    <h3 className="text-black">
                        <p>Hi, I’m Joyce. I’m a rising senior at UCLA majoring in Computer Science.
                            I began my academic journey in the life sciences, but it has evolved into
                            a deep passion for software engineering. While I started college on the pre-medicine track,
                            I found myself increasingly drawn to the logic, creativity, and impact of programming.
                            I have a strong interest in backend development, systems programming, and building tools
                            that solve real problems and a strong sense of curiosity that continues to shape how
                            I learn and build.
                        </p>
                    </h3>
                </div>
            </div>
            <div className="text-black py-4 px-4 xl:gap-16 sm:py-2 xl:px-16 items-center">
                <p>I’ve been actively developing both technical and collaborative skills through
                    coursework, personal projects, and club involvement. I’ve built full-stack apps like Foodie Fam,
                    a food-sharing web application I developed with an intelligent team of five using the MERN stack,
                    which helped me sharpen my skills with React, Node.js, MongoDB, JavaScript, and dynamic features
                    like real-time feed updates. I’ve engineered tools using technologies like FFmpeg.js and PyTorch–
                    such as a browser-based video cropping tool that streamlined data processing for the UCLA Men’s Tennis
                    team and an AI chatbot that helps users understand domain-specific tennis terminology. I’ve also
                    built a scalable 2D video game in C++ using object-oriented programming, implementing dynamic maps,
                    unique character behaviors, and memory-efficient systems. I’ve designed and, continue to, maintain
                    a custom WordPress site for a pre-medical organization, applying responsive design and front-end best
                    practices. Through these projects, I’ve grown confident working across the stack, collaborating in
                    version-controlled environments, and delivering user-focused solutions that solve real problems.
                </p>
                <br></br>
                <p>
                    Right now, I’m building this portfolio website using React + Next.js and Tailwind CSS. I’m currently
                    sharpening my skills in Python and algorithms through LeetCode, and working on a personal project that
                    makes technological use simpler for customers using AI technologies.
                </p>
                <br></br>
                <p>
                    I’m a self-driven learner who values clean code, thoughtful problem-solving, and working with others toward
                    meaningful outcomes. I’m actively seeking software engineering internships during the upcoming school year and
                    for Summer 2026. I’m excited to contribute to real-world products, learn from experienced engineers, and grow
                    into a developer who builds tools that make a difference.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;