import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex p-4 gap-4 w-400">
            {/* left  */}
            <div className="about-left p-2 border border-gray-100 shadow-md w-500 flex-1">
                <Image 
                    src="https://images.pexels.com/photos/31046966/pexels-photo-31046966/free-photo-of-stunning-winter-snow-covered-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Claudia picture"
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 567,
                        objectFit: 'cover',
                    }} 
                />
                <div className="about-me p-4">
                    <h2 className="text-3xl font-medium my-4">ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium. Id sequi aut quia. Ullam quaerat sequi similique odit aperiam nobis animi ex.
                    Ipsum illo facilis amet, natus nulla blanditiis. Libero aperiam mollitia consectetur fuga ipsam, iure earum et distinctio eius numquam nam provident facere at aliquid. A pariatur repudiandae accusantium architecto tempore!
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse?</p>
                </div>
            </div>

            {/* right  */}
            <div className="about-right p-2 flex-1">
                <div className="tools">
                    <h2 className="text-3xl font-medium mb-8">TOOLS &
                        <br></br>
                        TECHNOLOGIES</h2>

                        <div>
                            <div className="flex gap-7 mb-10">
                                <Image
                                    src="/icons/html.png"
                                    width={44}
                                    height={44}
                                    alt="html icon"
                                />
                                <Image
                                    src="/icons/css.png"
                                    width={44}
                                    height={44}
                                    alt="css icon"
                                />
                                <Image
                                    src="/icons/javascript.png"
                                    width={44}
                                    height={44}
                                    alt="javascript icon"
                                />
                                <Image
                                    src="/icons/react.png"
                                    width={44}
                                    height={44}
                                    alt="react icon"
                                />
                                <Image
                                    src="/icons/jquery.png"
                                    width={44}
                                    height={44}
                                    alt="jquery icon"
                                />
                                <Image
                                    src="/icons/figma.png"
                                    width={44}
                                    height={44}
                                    alt="figma icon"
                                />
                                <Image
                                    src="/icons/illustrator.png"
                                    width={44}
                                    height={44}
                                    alt="illustrator icon"
                                />
                                <Image
                                    src="/icons/ps.png"
                                    width={44}
                                    height={44}
                                    alt="ps icon"
                                />
                            </div>

                        </div>
                </div>

                <div className="other relative">
                    <h2 className="text-3xl font-medium mb-8">OTHER</h2>
                    <div className="w-full flex gap-5">
                        <Image
                            src="/assets/1.jpg"
                            width={150}
                            height={140}
                            alt="ps icon"
                            style={{
                                objectFit: 'cover',
                                borderRadius: 10
                            }}
                        />
                        <Image
                            src="/assets/2.jpg"
                            width={150}
                            height={140}
                            alt="ps icon"
                            style={{
                                objectFit: 'cover',
                                borderRadius: 10
                            }}
                        />
                        <Image
                            src="/assets/3.jpg"
                            width={150}
                            height={140}
                            alt="ps icon"
                            style={{
                                objectFit: 'cover',
                                borderRadius: 10
                            }}
                        />
                        <Image
                            src="/assets/4.jpg"
                            width={150}
                            height={140}
                            alt="ps icon"
                            style={{
                                objectFit: 'cover',
                                borderRadius: 10
                            }}
                        />
                    </div>
                    <p className="my-2 py-2 mb-8 w-180">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium.
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae?</p>
                </div>

                <div className="Follow me">
                    <h2 className="text-3xl font-medium mb-8">FOLLOW ME</h2>
                    <ul className="socials flex gap-7">
                        <li className="border border-gray-200 p-4 rounded-4xl w-15 flex align-center justify-center"><Link href="/"><LinkedInIcon></LinkedInIcon></Link></li>
                        <li className="border border-gray-200 p-4 rounded-4xl w-15 flex align-center justify-center"><Link href="/"><GitHubIcon></GitHubIcon></Link></li>
                        <li className="border border-gray-200 p-4 rounded-4xl w-15 flex align-center justify-center"><Link href="/"><XIcon></XIcon></Link></li>
                        <li className="border border-gray-200 p-4 rounded-4xl w-15 flex align-center justify-center"><Link href="/"><InstagramIcon></InstagramIcon></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}