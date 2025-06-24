import Image from "next/image";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex p-8">
            <div className="about-left">
                <Image src="https://images.pexels.com/photos/31046966/pexels-photo-31046966/free-photo-of-stunning-winter-snow-covered-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300} height={300} alt="Claudia headshot" />
                <div className="about-me">
                    <h2 className="text-black text-3xl font-black mb-8">ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium. Id sequi aut quia. Ullam quaerat sequi similique odit aperiam nobis animi ex.
                    Ipsum illo facilis amet, natus nulla blanditiis. Libero aperiam mollitia consectetur fuga ipsam, iure earum et distinctio eius numquam nam provident facere at aliquid. A pariatur repudiandae accusantium architecto tempore!
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae? Eaque, possimus modi architecto, cupiditate impedit id sunt veritatis repellat nisi illo numquam obcaecati excepturi aliquam qui perspiciatis. Dolorum nisi consequuntur ab nobis?</p>
                </div>
            </div>

            <div className="about-right">
                <div className="tools">
                    <h2 className="text-black text-3xl font-black mb-8">TOOLS & TECHNOLOGIES</h2>
                </div>

                <div className="other">
                    <h2 className="text-black text-3xl font-black mb-8">OTHER</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium.
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae?</p>
                </div>

                <div className="Follow me">
                    <h2 className="text-black text-3xl font-black mb-8">FOLLOW ME</h2>
                    <ul className="socials">
                        <Link href="/"><li><WebAssetIcon></WebAssetIcon></li></Link>
                        <Link href="/"><li><LinkedInIcon></LinkedInIcon></li></Link>
                        <Link href="/"><li><GitHubIcon></GitHubIcon></li></Link>
                        <Link href="/"><li><XIcon></XIcon></li></Link>
                        <Link href="/"><li><InstagramIcon></InstagramIcon></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}