import NavBar from '../components/NavBar'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="mx-auto px-7 py-15">
                <ProjectSection />
            </div>

            <Footer />
        </main>
    );
};