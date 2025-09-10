"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import localFont from 'next/font/local';
import useClickSound from '../hooks/useClickSound'; 
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

const HeroSection = () => {
    const playClick = useClickSound();

    return (
        <section className={satoshi.className}>
            <div className="max-w-4xl mx-auto mt-2 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-2 border-primary/10 border-black">
                    <Image
                        src="/images/hero-image.png"
                        alt="Joyce Jeoung"
                        decoding="async"
                        data-nimg="fill"
                        className="absolute h-[100%] w-[100%] left-1/2 top-1/2 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className="text-center">
                <h1 className="pt-5 grid grid-cols-1 place-self-center pb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text bg-gradient-to-br text-black">
                    Hi, I'm Joyce Jeoung
                </h1>
                <h2 className="pt-1 grid grid-cols-1 place-self-center pb-2 text-1xl bg-clip-text bg-gradient-to-br text-black">CS + Linguistics + Cognitive Science @ UCLA | Aspiring Software Engineer</h2>
                <br></br>
                <span className="text-black font-medium text-base sm:text-m lg:text-xl">
                    <TypeAnimation
                        sequence={[
                            "I'm a UCLA senior majoring in Computer Science, Linguistics, and Cognitive Science. My focus is on software engineering, and I've built projects in full-stack development, natural language processing, and game design with a focus on building tools that connect people through technology. Alongside coding, I've occasionally worked as an interpreter at international music events - experiences I value for the communication and collaboration skills they gave me.",
                            1000,
                        ]}
                        wrapper="span"
                        speed={75}
                        repeat={Infinity}
                    />
                </span>
            </div>
            <div className="pt-4 text-center">
                <Link href="/projects"><button onClick={() => {playClick();}} className="px-6 py-3 w-full sm:w-fit font-bold rounded-full mt-4 mr-4 bg-gradient-to-br from-gray-600 via-black to-gray-600 hover:bg-gradient-to-br hover:from-[#F0EDE9] hover:via-[#E6E1DD] hover:to-[#F0EDE9] text-white hover:text-black">View My Projects
                    <span className="block hover:text-black text-white rounded-full"></span>
                </button>
                </Link>
                <Link href="/contact">
                <button onClick={() => {playClick();}} className="px-1 py-1 w-full sm:w-fit font-bold rounded-full mt-4 bg-gradient-to-br from-gray-600 via-black to-gray-600 text-black border border-[#DCD7D3]">
                    <span className="block bg-[#E6E1DD] rounded-full px-5 py-2 hover:bg-gradient-to-br hover:from-[#F0EDE9] hover:via-[#E6E1DD] hover:to-[#F0EDE9]">Contact Me!</span>
                </button>
                </Link>
            </div>
            <div className="flex justify-center text-center space-x-6 mt-8">
                <a
                    href="https://github.com/1004yeeun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-700 hover:text-[#716767] transition"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/joycejeoung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-950 hover:text-[#716767] transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:joycejeoung@ucla.edu"
                    className="text-2xl text-red-950 hover:text-[#716767] transition"
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;