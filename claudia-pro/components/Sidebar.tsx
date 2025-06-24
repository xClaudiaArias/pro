"use client";

import Link from "next/link";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative xl:w-64">
            <div className="flex items-center justify-between p-2 bg-white xl:pl-0 xl:mb-2">
                <div>
                    <Link href="/" className="block p-2 hover:text-violet-500 rounded text-gray-600">
                        <h2 className="lg:text-3xl uppercase p-2 font-bold py-4 lg:px-3 xl:px-6 w-64">
                            Claudia 
                            <br></br>
                            Arias
                        </h2>
                    </Link>       
                </div>
                <div className="flex items-center justify-between p-2 bg-white xl:hidden">
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
                } lg:w-64 lg:h-80 xl:h-screen xl:w-64 xl:bg-white pl-8 absolute xl:relative right-0 xl:left-0 z-50 xl:pt-0 xl:block`}
            >

            <nav className="sm:h-90 bg-white rounded-lg shadow-md p-6 xl:rounded-none xl:shadow-none xl:p-0">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/about" className="block p-2 hover:text-violet-500 rounded text-gray-600">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block p-2 hover:text-violet-500 rounded text-gray-600">
                                CONTACT
                            </Link>
                        </li>
                        <li className="xl:mb-10">
                            <Link href="/" className="block p-2 hover:text-violet-500 rounded text-gray-600">
                                PROJECTS
                            </Link>
                        </li>
                        <li><Divider></Divider></li>
                        <li>
                            <ul className="socials flex space-x-4 p-2 gap-2 flex-wrap">
                                <li><Link href="/"><WebAssetIcon className="text-gray-400"></WebAssetIcon></Link></li>
                                <li><Link href="/"><LinkedInIcon className="text-gray-400"></LinkedInIcon></Link></li>
                                <li><Link href="/"><GitHubIcon className="text-gray-400"></GitHubIcon></Link></li>
                            </ul>
                        </li>
                        <li><Divider></Divider></li>
                        <li className="md:block p-2 rounded flex justify-center align-center xl:hidden" >
                            <button title="menu" type="button" className="xl:hidden p-2 flex align-center justify-center text-center w-32" onClick={closeSidebar}>
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