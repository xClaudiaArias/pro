import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs } from 'firebase/firestore';


// add a new project 
// TODO: schema 
export const addProject = async (project) => {
    try {
        const docRef = await addDoc(collection(db, "projects"), project);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log("Error adding comment: ", error)
    }
}

// fetch ALL projects
export const getProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
}