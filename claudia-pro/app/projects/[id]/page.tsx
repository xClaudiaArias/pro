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
                    <h2 className="title font-sans text-3xl font-extrabold uppercase text-white opacity-100">{project.project.title}</h2>
                    <p className="year font-bold pb-4 text-xl">{project.project.year}</p>
                    <p className="description w-xs text-xs uppercase font-extralight text-lg mb-10">{project.project.description ?? 'No description available'}</p>
                    <Link href="/" className="opacity-50 border-solid border-white border-2 p-4 rounded-full hover:opacity-100"><ArrowBackIcon /></Link>
                </div>
            </div>

            {/* Additional Images */}
            <div className="additional-imgs-container h-auto flex flex-col xl:grid xl:grid-cols-2 gap-2 w-full relative mb-16 w-full">
                {project.project.additional_imgs?.map((img, index) => (
                    <Image 
                        key={index} 
                        src={img}   
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={`image ${index + 1}`}
                        style={{
                            borderRadius: 10,
                            width: '100%',
                            height: 500,
                            objectFit: 'cover'
                        }}
                    />
                ))}
            </div>

            {/* About Section */}
            <div className="about">
                <h2 className="text-black text-3xl font-black mb-8">About this project</h2>
                <p className="w-250 mb-16 font-normal">{project.project.about}</p>
            </div>

            {/* Tools Section */}
            <div className="tools">
                <h2 className="text-black text-3xl font-black mb-8">Tools Used</h2>
                <ul className="w-200 flex flex-wrap gap-4 mb-20">
                    {project.project.tools?.map((tool, index) => (
                        <li className="font-light uppercase p-2 border border-solid border-neutral-800 text-neutral-800 rounded-full" key={index}>{tool}</li>
                    ))}
                </ul>
            </div>

            {/* Sitemap */}
            <div className="sitemap-userflow">
                <h2 className="text-black text-3xl font-black mb-5">Sitemap and User Flow</h2>
                <p className="w-250 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eaque perspiciatis! Possimus, cumque id. Fugiat beatae dolore iste consequuntur assumenda fuga id facilis aliquid deleniti delectus earum, inventore, repellendus officiis.</p>
                <div className="w-full h-auto flex flex-col xl:grid xl:grid-cols-2 gap-2 relative mb-16">
                    {project.project.sitemap?.map((img, index) => (
                        <Image 
                            key={index} 
                            src={img}   
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt={`image ${index + 1}`}
                            style={{
                                borderRadius: 10,
                                width: '100%',
                                height: 500,
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Wireframes */}
            <div className="wireframes-planning">
                <h2 className="text-black text-3xl font-black mb-8">Wireframes and Planning</h2>
                <p className="w-250 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eaque perspiciatis! Possimus, cumque id. Fugiat beatae dolore iste consequuntur assumenda fuga id facilis aliquid deleniti delectus earum, inventore, repellendus officiis.</p>
                <div className="flex gap-10 w-full h-auto flex flex-col xl:grid xl:grid-cols-2 gap-2 relative mb-16">
                    {project.project.wireframes?.map((img, index) => (
                        <Image 
                                key={index} 
                                src={img}   
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={`image ${index + 1}`}
                                style={{
                                    borderRadius: 10,
                                    width: '100%',
                                    height: 500,
                                    objectFit: 'cover'
                                }}
                            />
                    ))}
                </div>
            </div>

            {/* High Fidelity */}
            <div className="high-fidelity">
                <h2 className="text-black text-3xl font-black mb-8">High Fidelity Design</h2>
                <p className="w-250 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eaque perspiciatis! Possimus, cumque id. Fugiat beatae dolore iste consequuntur assumenda fuga id facilis aliquid deleniti delectus earum, inventore, repellendus officiis.</p>
                <div className="flex gap-10 w-full h-auto flex flex-col xl:grid xl:grid-cols-2 gap-2 relative mb-16">
                    {project.project.high_fidelity_imgs?.map((img, index) => (
                        <Image 
                            key={index} 
                            src={img}   
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt={`image ${index + 1}`}
                            style={{
                                borderRadius: 10,
                                width: '100%',
                                height: 500,
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Live Demo */}
            <div className="live-demo mb-10">
                <h2 className="text-black text-3xl font-black mb-8">Live demo</h2>
                {project.project.demo && (
                    <Image src={project.project.demo} 
                    width={300} 
                    height={300} 
                    alt="Live demo"
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 700,
                        objectFit: 'cover'
                    }}
                    />
                )}
            </div>

            {/* Go Up */}
            <div className="go-up w-full flex justify-center align-center py-7">
                <Link className="p-2 border-1 border-black rounded-4xl w-20 flex justify-center align-center hover:bg-black hover:text-white" href="/"><ArrowUpwardIcon /></Link>
            </div>
        </div>
    );
}
