import React from "react";
import Link from "next/link";

const Project = () => {
    return (
        <Link href="/">
            <div className="project-cotainer">
                <h2 className="title font-sans text-3xl font-extrabold text-transform: uppercase">Graphics Logo</h2>
                <p className="year font-bold">2024</p>
                <p className="description w-xs text-xs text-transform: uppercase">Proejects description will tell us everything we need to know about the project okay?</p>
            </div>
        </Link>
    )
}

export default Project