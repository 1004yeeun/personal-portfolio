import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="container mx-auto px-7 py-25 sm:py-25">
                <AboutSection />
            </div>
            <div className="mx-auto px-7 py-25 sm:py-25">
                <ProjectSection />
            </div>

            <Footer />
        </main >
    );
};