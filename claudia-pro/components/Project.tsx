"use client";

import { useRouter } from "next/navigation"; 
import React from "react";
import { ProjectType } from "./types";

interface ProjectProps {
    project: ProjectType; 
}

export default function Project({ project }: ProjectProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${project.id}`);
    };

    return (
        <div 
            className="project-card cursor-pointer p-4 border rounded-md hover:shadow-lg transition"
            onClick={handleClick}
        >
            <h2>{project.title}</h2>
            <p>{project.year}</p>
            <p>{project.description}</p>
        </div>
    );
}
