"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ProjectType } from "./types";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ProjectType));
            console.log(projectsData)
            setProjects(projectsData);
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
