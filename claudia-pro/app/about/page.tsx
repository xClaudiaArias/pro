import Image from "next/image";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
import { Chip } from "@mui/material";

export default function Page() {
    return (
        <div className="flex p-4 gap-4 h-full">
            <div className="about-left p-2 border border-gray-100 shadow-md">
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
                    <h2 className="text-3xl font-medium">ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium. Id sequi aut quia. Ullam quaerat sequi similique odit aperiam nobis animi ex.
                    Ipsum illo facilis amet, natus nulla blanditiis. Libero aperiam mollitia consectetur fuga ipsam, iure earum et distinctio eius numquam nam provident facere at aliquid. A pariatur repudiandae accusantium architecto tempore!
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae? Eaque, possimus modi architecto, cupiditate impedit id sunt veritatis repellat nisi illo numquam obcaecati excepturi aliquam qui perspiciatis. Dolorum nisi consequuntur ab nobis?</p>
                </div>
            </div>

            <div className="about-right p-2">
                <div className="tools">
                    <h2 className="text-3xl font-medium mb-8">TOOLS &
                        <br></br>
                        TECHNOLOGIES</h2>

                        <div>

                        </div>
                </div>

                <div className="other">
                    <h2 className="text-3xl font-medium mb-8">OTHER</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium.
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae?</p>
                </div>

                <div className="Follow me">
                    <h2 className="text-3xl font-medium mb-8">FOLLOW ME</h2>
                    <ul className="socials">
                        <li><Link href="/"><LinkedInIcon></LinkedInIcon></Link></li>
                        <li><Link href="/"><GitHubIcon></GitHubIcon></Link></li>
                        <li><Link href="/"><XIcon></XIcon></Link></li>
                        <li><Link href="/"><InstagramIcon></InstagramIcon></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}