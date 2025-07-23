import Image from "next/image";
import HeroSection from "./components/HeroSection"
import MyHead from './components/MyHead'

export default function Home() {
  return (
    <>
    <MyHead title="Joyce Jeoung Portfolio Home" description="Hi! Learn more about Joyce Jeoung." />
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container mx-auto px-7 py-7 lg:py-20">
        <HeroSection />
      </div>
    </main>
    </>
  );
};