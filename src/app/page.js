import Image from "next/image";
import HeroSection from "./components/HeroSection"
import MyHead from './components/MyHead'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <>
    <MyHead title="Joyce Jeoung Portfolio Home" description="Hi! Learn more about Joyce Jeoung." />
    <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
      <NavBar/>
      <div className="container mx-auto px-7 py-25 sm:py-20">
        <HeroSection />
      </div>
    </main>
    </>
  );
};