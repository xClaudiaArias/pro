"use client";

import { useRouter } from "next/router";
import React from "react";

interface ProjectProps {
    projects: {
        id: string;
        title: string;
        year: string;
        description: string;
        additional_imgs: [],
        about: string,
        tools: [],
        sitemap: [],
        wireframes: [],
        high_fidelity_imgs: [],
        demo: string,
        tags: []
    };
}

export default function Project({ projects }: ProjectProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${projects.id}`);
    };

    console.log(projects, " project")

    return (
        <div 
            className="project-card cursor-pointer p-4 border rounded-md hover:shadow-lg transition"
            onClick={handleClick}
        >
            <h2>{projects.title}</h2>
            <p>{projects.year}</p>
            <p>{projects.description}</p>
        </div>
    );
}


