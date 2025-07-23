import Image from "next/image";
import HeroSection from "./components/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container mx-auto px-7 py-7 lg:py-20">
        <HeroSection />
      </div>
    </main>
  );
};