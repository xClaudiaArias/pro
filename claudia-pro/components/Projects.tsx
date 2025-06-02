"use client";

import React, { useEffect, useState } from "react";
import { ProjectType } from "./types";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                const data: ProjectType[] = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects-container h-screen p-4 lg:grid lg:grid-cols-2 gap-4">
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
