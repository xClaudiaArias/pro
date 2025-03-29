import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ProjectType } from "@/components/types";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${id}`, {
        cache: "no-store", 
    });
    

    if (!res.ok) {
        console.error('Error fetching project data:', res.statusText);
        return notFound();
    }
    
    const project: ProjectType = await res.json();

    return (
        <div className="container">
            <div className="hero-container">
                <h2 className="title font-sans text-3xl font-extrabold uppercase">{project.project.title}</h2>
                <p className="year font-bold">{project.project.year}</p>
                <p className="description w-xs text-xs uppercase">{project.project.description ?? 'No description available'}</p>
                <Link href="/"><ArrowBackIcon /></Link>
            </div>

            {/* Additional Images */}
            <div className="additional-imgs-container flex">
                {project.project.additional_imgs?.map((img, index) => (
                    <Image key={index} src={img} width={300} height={300} alt={`image ${index + 1}`} />
                ))}
            </div>

            {/* About Section */}
            <div className="about">
                <h2>About this project</h2>
                <p>{project.project.about}</p>
            </div>

            {/* Tools Section */}
            <div className="tools">
                <h2>Tools Used</h2>
                <ul>
                    {project.project.tools?.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>

            {/* Sitemap */}
            <div className="sitemap-userflow">
                <h2>Sitemap and User Flow</h2>
                {project.project.sitemap?.map((img, index) => (
                    <Image key={index} src={img} width={300} height={300} alt={`sitemap ${index + 1}`} />
                ))}
            </div>

            {/* Wireframes */}
            <div className="wireframes-planning">
                <h2>Wireframes and Planning</h2>
                {project.project.wireframes?.map((img, index) => (
                    <Image key={index} src={img} width={300} height={300} alt={`wireframe ${index + 1}`} />
                ))}
            </div>

            {/* High Fidelity */}
            <div className="high-fidelity">
                <h2>High Fidelity Design</h2>
                {project.project.high_fidelity_imgs?.map((img, index) => (
                    <Image key={index} src={img} width={300} height={300} alt={`high fidelity ${index + 1}`} />
                ))}
            </div>

            {/* Live Demo */}
            {project.project.demo && (
                <div className="live-demo">
                    <Image src={project.project.demo} width={300} height={300} alt="Live demo" />
                </div>
            )}

            {/* Go Up */}
            <div className="go-up">
                <Link href="/"><ArrowUpwardIcon /></Link>
            </div>
        </div>
    );
}
