import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const projectsCollection = collection(db, "projects");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            // CREATE: Add a project
            const { title, year, description, additional_imgs, about, tools, sitemap, wireframes, high_fidelity, demo, tags  } = req.body;

            const docRef = await addDoc(projectsCollection, {
                title,
                year,
                description, 
                additional_imgs, 
                about, 
                tools, 
                sitemap, 
                wireframes, 
                high_fidelity, 
                demo,
                tags: tags || [], // Default to empty array if not provided
                createdAt: new Date()
            });
        
            res.status(201).json({ id: docRef.id, title, year, description, additional_imgs, about, tools, sitemap, wireframes, high_fidelity, demo, tags });
        } 
        else if (req.method === "GET") {
            // READ: Get all projects
            const querySnapshot = await getDocs(projectsCollection);
            const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.status(200).json(projects);
        } 
        else if (req.method === "PUT") {
            // UPDATE: Edit a project
            const { id, ...updatedData } = req.body;
            const projectRef = doc(db, "projects", id);
            await updateDoc(projectRef, updatedData);
            res.status(200).json({ message: "Project updated successfully" });
        } 
        else if (req.method === "DELETE") {
            // DELETE: Remove a project
            const { id } = req.body;
            const projectRef = doc(db, "projects", id);
            await deleteDoc(projectRef);
            res.status(200).json({ message: "Project deleted successfully" });
        } 
        else {
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).json({ message: `Method ${req.method} not allowed` });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: (error as Error).message });
    }
}
