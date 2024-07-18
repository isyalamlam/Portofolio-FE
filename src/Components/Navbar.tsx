// Navbar.tsx
const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 w-full bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Portofolio</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#project">Project</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Isya Lamlam Al Sabil</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-24 text-1.5xl gap-10">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Portofolio</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;