import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const docRef = doc(db, "projects", params.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return notFound();
    }

    const project = docSnap.data();

    return (
        <div className="container">
            <div className="hero-container">
                <h2 className="title font-sans text-3xl font-extrabold uppercase">{project.title}</h2>
                <p className="year font-bold">{project.year}</p>
                <p className="description w-xs text-xs uppercase">{project.description}</p>
                <Link href="/"><ArrowBackIcon /></Link>
            </div>

            {/* Additional Images */}
            <div className="additional-imgs-container flex">
                {project.images?.map((img: string, index: number) => (
                    <Image key={index} src={img} width={300} height={300} alt={`image ${index + 1}`} />
                ))}
            </div>

            {/* About Section */}
            <div className="about">
                <h2>About this project</h2>
                <p>{project.about}</p>
            </div>

            {/* Tools Section */}
            <div className="tools">
                <h2>Tools Used</h2>
                <ul>
                    {project.tools?.map((tool: string, index: number) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>

            {/* Sitemap and User Flow */}
            <div className="sitemap-userflow">
                <h2>Sitemap and User Flow</h2>
                {project.sitemap?.map((img: string, index: number) => (
                    <Image key={index} src={img} width={300} height={300} alt={`sitemap ${index + 1}`} />
                ))}
            </div>

            {/* Wireframing and Planning */}
            <div className="wireframes-planning">
                <h2>Wireframes and Planning</h2>
                {project.wireframes?.map((img: string, index: number) => (
                    <Image key={index} src={img} width={300} height={300} alt={`wireframe ${index + 1}`} />
                ))}
            </div>

            {/* High Fidelity Design */}
            <div className="high-fidelity">
                <h2>High Fidelity Design</h2>
                {project.highFidelity?.map((img: string, index: number) => (
                    <Image key={index} src={img} width={300} height={300} alt={`high fidelity ${index + 1}`} />
                ))}
            </div>

            {/* Live Demo */}
            <div className="live-demo">
                <Image src={project.demo} width={300} height={300} alt="Live demo" />
            </div>

            {/* Go Up */}
            <div className="go-up">
                <Link href="/"><ArrowUpwardIcon /></Link>
            </div>
        </div>
    );
}
