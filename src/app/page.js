"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import MyHead from './components/MyHead';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import useTransitionSound from './hooks/useTransitionSound';
import localFont from 'next/font/local';

const satoshi = localFont({
    src: '../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export default function Home() {
  const playTransition = useTransitionSound();
  const [showButton, setShowButton] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: "smooth" });
  };

  return (
    <>
      <MyHead title="Joyce Jeoung Portfolio Home" description="Hi! Learn more about Joyce Jeoung." />
      <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
        <NavBar />
        <div className="container mx-auto px-15 py-30 sm:py-30">
          <HeroSection />
        </div>
        <hr className="mt-0 mb-20 h-0.5 mx-10 md:mx-18 lg:mx-30 border-0 bg-[#c1bab4]" />
        <div className="px-10 md:px-20">
          <AboutSection />
        </div>
        <div className="mx-auto px-7 py-25 sm:py-25">
          <ProjectSection />
        </div>

        {showButton && (
          <button onClick={ () => {scrollToTop(); playTransition();} } className="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-[#545250] transition" aria-label="Back to top">
            <FaArrowUp onClick={ () => {playTransition();} }/>
          </button>
        )}
      </main>
    </>
  );
};