const projects = {
    'foodie-fam': {
        title: 'Foodie Fam',
        description: 'A full-stack dining companion app built with React and Node.js',
        image: '/images/hero-image.png'
    },
    'slice-video': {
        title: 'Slice',
        description: 'A video slicing editing tool'
    },
};

export default function ProjectPage({ params }) {
    const project = projects[params.id];

    if (!project) return (
        <h1>Project not found. Update the design of this page.</h1>
    );
    
    return (
        <div className="text-red-400 bg-white flex flex-col min-h-screen">
            <h1>Project ID: {params.id}</h1>
            <h1>{project.title}</h1>
            <h1>{project.description}</h1>
            <img src={project.image} alt={project.title} />
        </div>
    );
};