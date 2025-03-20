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
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsData: ProjectType[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ProjectType, "id">)
                }));

                console.log(projectsData);
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
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

