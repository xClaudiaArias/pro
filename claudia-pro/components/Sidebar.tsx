"use client";

import Link from "next/link";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
            <div className="flex items-center justify-between pl-8 bg-white md:relative md:block">
                <h2 className="lg:text-3xl uppercase font-bold py-4 px-2 bg-white md:relative md:block">
                    Claudia 
                    {/* TODO: make name responsive  */}
                    <br></br>
                    Arias
                </h2>
                <div className="flex items-center justify-between p-2 bg-white md:hidden">
                    <button
                        title="menu"
                        type="button"
                        className="p-2 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>


            <aside className={`${
                    isOpen ? "block" : "hidden"
                } md:block w-64 md:w-64 lg:w-64 h-80 lg:h-screen lg:bg-white pl-8 absolute md:relative right-0 z-50  md:pt-[200px] lg:pt-0 md:bg-transparent`}
            >

            <nav className="h-80 bg-white rounded-lg shadow-md p-4 lg:rounded-none lg:shadow-none lg:p-0">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/about" className="block p-2 hover:bg-rose-100 rounded text-gray-600">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block p-2 hover:bg-rose-100 rounded text-gray-600">
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block p-2 hover:bg-rose-100 rounded text-gray-600">
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <ul className="socials flex space-x-4 p-2 gap-2 flex-wrap">
                                <li><Link href="/"><WebAssetIcon className="text-gray-400"></WebAssetIcon></Link></li>
                                <li><Link href="/"><LinkedInIcon className="text-gray-400"></LinkedInIcon></Link></li>
                                <li><Link href="/"><GitHubIcon className="text-gray-400"></GitHubIcon></Link></li>
                            </ul>
                        </li>
                        <li className="block p-2 hover:bg-rose-100 rounded flex align-center" >
                            <button title="menu" type="button" className="md:hidden p-2" onClick={closeSidebar}>
                                <CloseIcon className="text-gray-300"/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar