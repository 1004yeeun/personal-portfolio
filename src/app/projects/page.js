import NavBar from '../components/NavBar'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="container mx-auto px-7 py-25 sm:py-25">
                <section className={satoshi.className}>
                    <h1 className="text-3xl font-bold mb-4 text-black text-center">My Projects</h1>
                    <div className="mx-auto sm:py-3 py-1">
                        <ProjectSection />
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};