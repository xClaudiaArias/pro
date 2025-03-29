import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export async function GET(request: Request, { params }: { params: { id: string }}) {
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Project ID is required "}, { status: 400 })
        }

        const projectRef = doc(db, "projects", id);
        const projectSnap = await getDoc(projectRef);

        if (!projectSnap.exists()) {
            return NextResponse.json({ error: "Project not found"}, {status: 404});
        }

        return NextResponse.json({ project: projectSnap.data() }, {status: 200})
    } catch (error) {
        console.error("Error fetching project: ", error)
        return NextResponse.json({ error: "Failed to fetch project."})
    }
}