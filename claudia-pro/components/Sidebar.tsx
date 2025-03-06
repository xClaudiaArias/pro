import Link from "next/link";

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
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar