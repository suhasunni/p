import Link from 'next/link';

const NavBar = () => {
    return (
    <div className="navbar shadow-sm">
        <div className="navbar-start">
            <div className='text-3xl font-extrabold pl-7 tracking-wide text-gray-700 font-mono'>
                <Link href="/">Suhas Unni</Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-mono">
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="navbar-end"/>
        <div/>
    </div>
  )
}

export default NavBar