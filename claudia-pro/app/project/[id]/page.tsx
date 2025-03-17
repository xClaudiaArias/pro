// Mock data (replace with Firebase later)
const projects = [
    {
        id: "graphics-logo",
        title: "Graphics Logo",
        year: "2024",
        description: "A sleek and modern logo for a tech startup.",
    },
    {
        id: "web-app",
        title: "Web Application",
        year: "2023",
        description: "A full-stack web application for task management.",
    },
    {
        id: "ux-design",
        title: "UX Design",
        year: "2023",
        description: "User centered design featuring frontend dev agile methodologies.",
    },
    {
        id: "ios-app",
        title: "IOS App",
        year: "2025",
        description: "Ios application clear mobile using xcode and other tools",
    },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) return <p>Project not found</p>;

    return (
        <main>
            <h1>{project.title}</h1>
            <p>{project.year}</p>
            <p>{project.description}</p>
        </main>
    );
}
