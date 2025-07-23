"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import localFont from 'next/font/local';

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

const HeroSection = () => {
    return (
        <section className={satoshi.className}>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-left">
                    <h1 className="pb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-purple-300 to-pink-500">
                        Hi, I'm Joyce Jeoung!
                    </h1>
                    <br></br>
                    <span className="text-white text-base sm:text-lg lg:text-xl">
                        <TypeAnimation
                            sequence={[
                                "A little bit about me, I am an upcoming senior studying Computer Science, Linguistics, and Cognitive Science at UCLA.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                    <div className="pt-4">
                        <button className="px-6 py-3 w-full sm:w-fit font-bold rounded-full mt-4 mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit font-bold rounded-full mt-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white border border-white">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-1">
                    <br></br>
                </div>
                <div className="col-span-3 place-self-center mt-15 lg:mt-0">
                    <div className="rounded-4xl bg-[#181818] w-[500px] h-[300px] sm:w-[250px] lg:w-[300px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection