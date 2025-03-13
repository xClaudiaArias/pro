import Link from "next/link";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2>Claudia Arias</h2>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link href="/about" className="block p-2 hover:bg-gray-700 rounded">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block p-2 hover:bg-gray-700 rounded">
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <ul className="socials">
                            <Link href="/"><li><WebAssetIcon></WebAssetIcon></li></Link>
                            <Link href="/"><li><LinkedInIcon></LinkedInIcon></li></Link>
                            <Link href="/"><li><GitHubIcon></GitHubIcon></li></Link>
                            <Link href="/"><li><XIcon></XIcon></li></Link>
                            <Link href="/"><li><InstagramIcon></InstagramIcon></li></Link>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar