import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <div className="navbar bg-stone-200 shadow-sm">
        <div className="navbar-start">
            <div className='font-bold pl-10'>
                Suhas Unni
            </div>
            
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="navbar-end"/>
    </div>
  )
}

export default NavBar