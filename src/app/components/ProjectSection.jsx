import Project from './Project';

const ProjectSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-11 grid gap-5">
            <h1 className="text-center font-extrabold text-black text-3xl pb-5">My Projects</h1>

            <Project
                name="FoodieFam"
                description="FoodieFam is a web app built atop a MERN stack that aims to connect people to share a meal with. Have you ever wanted to try multiple dishes from a restaurant while on a solo mission? Use Foodie Fam to find others to share a meal family style!"
                image="/images/foodie-fam-image.png"
                tech={["React", "Node.js", "Express", "MongoDB Atlas (NoSQL)", "Git/GitHub"]}
                skill={["Full-Stack", "Backend Dev", "Authentication/Secure Login", "Rest API", "Leadership", "Team Collaboration", "Communication", "Version Control"]}
                github="https://github.com/dkmrn/foodie-fam"
            />
            
            <Project
                name="Marble Madness"
                description="Marble Madness is a 2-dimensional maze-based video game where you battle enemies and collect power-ups along your journey in guarding crystals to the finish line within the shortest amount of time. This C++ game implements inheritance, polymorphism, and memory management to optimize performance and enhance system architecture with object-oriented programming."
                image="/images/marble-madness-image.png"
                tech={["C++"]}
                skill={["Object-Oriented Programming", "Inheritance", "Polymorphism", "Memory Management", "Debugging", "Optimization"]}
                github="https://github.com/1004yeeun/marble-madness"
            />

            <Project
                name="Slice"
                description="Slice is a browser-based video editing tool built to efficiently crop and organize sports footage with precision and speed. Slice allows users to extract specific highlights from multi-hour tennis matches and group them by shot type for AI-driven analysis. "
                image="/images/slice-image.png"
                tech={["Firebase", "PyTorch", "TypeScript", "FFmpeg.js", "React", "Node.js"]}
                skill={["Browser-based Video Processing", "Frontend Performance Optimization", "In-browser File Handling"]}
                github="https://github.com/1004yeeun/slice"
            />

            <Project
                name="Uclaphichi.com"
                description="UclaPhiChi.com is a digital home base for UCLA's pre-med students seeking mentorship, leadership, and community. When the Phi Chi Professional Pre-Medical Society first launched its chapter, there was no digital infrastructure - no online presence, no member system, no place for students to find support. I took initiative to build the organization's website from the ground up, transforming a blank canvas into a responsive, content-rich hub that continues to grow with the chapter."
                image="/images/phichi-image.png"
                tech={["HTML/CSS", "WordPress"]}
                skill={["UI/UX", "Web Dev", "Content Management Systems", "User-centered Design", "Technical Initiative"]}
                link="https://uclaphichi.com"
            />

            <Project
                name="Personal Portfolio"
                description="Joycejeoung.com is a personal portfolio website that I built and deployed to showcase my projects, experiences, and technical skills. The site serves as an evolving hub for my software engineering journey and reflects my growth as a developer."
                image="/images/personal-portfolio-image.png"
                tech={["React", "Next.js", "Tailwind CSS"]}
                skill={["UI/UX", "Personal Branding", "Frontend Dev", "Reusable Component Design", "Organization"]}
                github="https://github.com/1004yeeun/personal-portfolio"
                link="https://joycejeoung.com"
            />
        </div>
    );
};

export default ProjectSection;