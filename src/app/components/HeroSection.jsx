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
            <div className="max-w-4xl mx-auto mt-5 flex flex-col items-center text-center">
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
                <br></br>
                <span className="text-black font-medium text-base sm:text-lg lg:text-xl">
                    <TypeAnimation
                        sequence={[
                            "I am an upcoming senior studying Computer Science, Linguistics, and Cognitive Science at UCLA. Go Bruins!",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </div>
            <div className="pt-4 text-center">
                <button className="px-6 py-3 w-full sm:w-fit font-bold rounded-full mt-4 mr-4 bg-gradient-to-br from-gray-400 via-black to-gray-400 hover:bg-gradient-to-br hover:from-gray-100 hover:via-gray-300 hover:to-gray-200 text-white hover:text-black">View My Projects
                    <span className="block hover:text-black text-white rounded-full"></span>
                </button>

                <button className="px-1 py-1 w-full sm:w-fit font-bold rounded-full mt-4 bg-gradient-to-br from-gray-400 via-black to-gray-400 text-black border border-white">
                    <span className="block bg-white rounded-full px-5 py-2 hover:bg-gradient-to-br hover:from-gray-100 hover:via-gray-300 hover:to-gray-200">Contact Me!</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSection