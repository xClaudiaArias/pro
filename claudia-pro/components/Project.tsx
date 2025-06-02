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
        // TODO: projects should be responive and display like columns on smaller screens
        <div 
            className="sm:h-[500px] project-card h-full cursor-pointer rounded shadow-sm bg-center hover:shadow-lg hover:scale-102 transition text-white"
            style={{ backgroundImage: `url(${project.additional_imgs[0]})` }}
            onClick={handleClick}
        >
            <div className="hover:bg-black hover:opacity-75 lg:h-full p-4 rounded flex flex-col justify-center p-8">
                <h2 className="uppercase text-4xl font-bold">{project.title}</h2>
                <p className="text-2xl font-bold">{project.year}</p>
                <p className="py-2">{project.description}</p>
            </div>
        </div>
    );
}
