import Image from "next/image";
import HeroSection from "./components/HeroSection";
import MyHead from './components/MyHead';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <>
      <MyHead title="Joyce Jeoung Portfolio Home" description="Hi! Learn more about Joyce Jeoung." />
      <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
        <NavBar />
        <div className="container mx-auto px-7 py-30 sm:py-30">
          <HeroSection />
        </div>
        <hr className="mb-25 border-t-2 mx-5 border-black" />
        <div className="px-10 md:px-20">
          <AboutSection />
        </div>
        <div className="mx-auto px-7 py-25 sm:py-25">
          <ProjectSection />
        </div>
      </main>
    </>
  );
};