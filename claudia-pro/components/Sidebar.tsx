"use client";

import Link from "next/link";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between p-4 bg-white shadow-md md:hidden">
                <h2 className="text-lg font-bold">Claudia Arias</h2>
                    <button
                        title="menu"
                        type="button"
                        className="p-2 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </button>
            </div>


            <aside className={`${
                    isOpen ? "block" : "hidden"
                } md:block w-32 md:w-32 lg:w-64 h-screen bg-white p-5 absolute md:relative top-18 right-0 z-50 md:h-10`}
            >

                <button title="menu" type="button" className="md:hidden p-2" onClick={closeSidebar}>
                    <CloseIcon/>
                </button>

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
                                <li><Link href="/"><WebAssetIcon></WebAssetIcon></Link></li>
                                <li><Link href="/"><LinkedInIcon></LinkedInIcon></Link></li>
                                <li><Link href="/"><GitHubIcon></GitHubIcon></Link></li>
                                <li><Link href="/"><XIcon></XIcon></Link></li>
                                <li><Link href="/"><InstagramIcon></InstagramIcon></Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar