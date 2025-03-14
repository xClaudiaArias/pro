import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// reference the proj coll 
const projectsColection = collection(db, "projects")

// create / add a new project 
export default addProject = async (title, year, description, imageUrl) => {
    try {
        const docRef = await addDoc(projectsColection, {
            title,
            year,
            description,
            imageUrl,
            createdAt: new Date()
        });
        console.log("Project added with ID: ", docRef.id)
        return docRef.id;
    } catch (error) {
        console.error("Error adding project: ", error)
        return null;
    }
}

// read / get all projects
export const getProjects = async () => {
    try {
        const querySnapshot = await getDocs(projectsColection);
        return querySnapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data()
        }))
    } catch (error) {
        console.error("Error fetching projects: ", error)
        return [];
    }
}

// update edit a project 
export const updateProject = async (projectId, updatedData) => {
    try {
        const projectRef = doc(db, "projects", projectId);
        await updateDoc(projectRef, updatedData);
        console.log("Project updated: ", projectId)
    } catch (error) {
        console.error("Error updating project: ", error)
    }
}

// delete project 
export const deleteProject = async (projectId) => {
    try {
        const projectRef = doc(db, "projects", projectId);
        await deleteDoc(projectRef)
        console.log("Project deleted: ", projectId)
    } catch(error) {
        console.log("Error deleting project: ", error)
    }
}