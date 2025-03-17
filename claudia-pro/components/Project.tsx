import React from "react";

interface ProjectProps {
    project: {
        id: string;
        title: string;
        year: number;
        description: string;
    };
}

export default function Project({ project }: ProjectProps) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.year}</p>
            <p>{project.description}</p>
        </div>
    );
}


