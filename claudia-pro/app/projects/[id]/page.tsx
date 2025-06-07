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
        <div className="w-full relative">
            <div className="hero-container rounded-md h-120 relative mb-5" style={{ backgroundImage: `url(${project.project.additional_imgs[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-img rounded-md h-120 bg-black absolute w-full opacity-75">
                </div>
                <div className="absolute top-30 p-6 text-white">
                    <h2 className="title font-sans text-4xl font-extrabold uppercase text-white opacity-100">{project.project.title}</h2>
                    <p className="year font-bold pb-4 text-xl">{project.project.year}</p>
                    <p className="description w-xs text-xs uppercase font-extralight text-lg mb-10">{project.project.description ?? 'No description available'}</p>
                    <Link href="/" className="border-solid border-white border-2 p-4 rounded-full"><ArrowBackIcon /></Link>
                </div>
            </div>

            {/* Additional Images */}
            <div className="additional-imgs-container h-140 flex gap-10 w-full relative mb-16">
                {project.project.additional_imgs?.map((img, index) => (
                    <Image 
                        key={index} 
                        src={img}   
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"  
                        alt={`image ${index + 1}`}
                        style={{
                            borderRadius: 10
                        }}
                    />
                ))}
            </div>

            {/* About Section */}
            <div className="about">
                <h2 className="text-black text-4xl font-black mb-8">About this project</h2>
                <p className="w-300 mb-16 font-normal">{project.project.about}</p>
            </div>

            {/* Tools Section */}
            <div className="tools">
                <h2 className="text-black text-4xl font-black mb-8">Tools Used</h2>
                <ul className="w-200 flex flex-wrap gap-4 mb-20">
                    {project.project.tools?.map((tool, index) => (
                        <li className="font-light uppercase p-2 border border-solid border-neutral-800 text-neutral-800 rounded-full" key={index}>{tool}</li>
                    ))}
                </ul>
            </div>

            {/* Sitemap */}
            <div className="sitemap-userflow">
                <h2 className="text-black text-4xl font-black mb-8">Sitemap and User Flow</h2>
                <div className=" h-140 flex gap-10 w-full relative mb-16">
                    {project.project.sitemap?.map((img, index) => (
                        <Image 
                            key={index} 
                            src={img}   
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"  
                            alt={`image ${index + 1}`}
                            style={{
                                borderRadius: 10
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Wireframes */}
            <div className="wireframes-planning">
                <h2 className="text-black text-4xl font-black mb-8">Wireframes and Planning</h2>
                <div className=" h-140 flex gap-10 w-full relative mb-16">
                    {project.project.wireframes?.map((img, index) => (
                        <Image 
                                key={index} 
                                src={img}   
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"  
                                alt={`image ${index + 1}`}
                                style={{
                                    borderRadius: 10
                                }}
                            />
                    ))}
                </div>
            </div>

            {/* High Fidelity */}
            <div className="high-fidelity">
                <h2 className="text-black text-4xl font-black mb-8">High Fidelity Design</h2>
                <div className=" h-140 flex gap-10 w-full relative mb-16">
                    {project.project.high_fidelity_imgs?.map((img, index) => (
                        <Image 
                            key={index} 
                            src={img}   
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"  
                            alt={`image ${index + 1}`}
                            style={{
                                    borderRadius: 10
                            }}
                        />
                    ))}
                </div>
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
