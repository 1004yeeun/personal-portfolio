import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="container mx-auto px-7 pt-25 pb-5 sm:pt-25">
                <div className={satoshi.className}>
                    <h1 className="text-3xl font-bold mb-1 sm:mb-4 md:mb-0 text-black text-center">About Me</h1>
                </div>
                <AboutSection />
            </div>
            <div className="mx-auto px-7 pt-5 pb-15 sm:pt-10">
                <ProjectSection />
            </div>

            <Footer />
        </main >
    );
};