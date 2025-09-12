import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function FoodiePage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div>
                <h1 className="mx-auto px-7 py-25 sm:py-25 text-center text-black">my foodie page! coming soon...</h1>
            </div>

            <Footer />
        </main>
    );
};