// import React, { useEffect, useState } from "react";
import React from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
import Project from "./Project";
import Link from "next/link";


// mock data for styling purposes 
const projects = [
    {
        id: "graphics-logo",
        title: "Graphics Logo",
        year: 2024,
        description: "A sleek and modern logo for tech startup"
    },
    {
        id: "web-app",
        title: "Web Application",
        year: 2023,
        description: "A full-stack web application for task management"
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

const Projects = () => {
    // const [projects, setProjects] = useState<ProjectType[]>([]);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const querySnapshot = await getDocs(collection(db, "projects"));
    //         const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ProjectType));
    //         setProjects(projectsData);
    //     };

    //     fetchProjects();
    // }, []);

    return (
        // <div className="projects-container">
        //     {projects.map((project) => (
        //         <Project key={project.id} {...project} />
        //     ))}
        // </div>
        <div>
            {
                projects.map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`}>
                        <Project project={project} />
                    </Link>
                ))
            }
        </div>
    );
};

export default Projects;
