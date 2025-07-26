"use client";
import React, { useState } from "react";
import Link from "next/link";
import localFont from 'next/font/local';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon  } from "@heroicons/react/24/outline";
import useClickSound from "../hooks/useClickSound";

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "about",
    },
    {
        title: "My Projects",
        path: "projects",
    },
    {
        title: "A Foodie's Blog",
        path: "foodie",
    }
]

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
    const playClick = useClickSound();

    return (
        <main className={satoshi.className}>
            <nav className="fixed top-0 left-0 right-0 z-10 bg-[#E6E1DD]/98">
                <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4 sm:py-2" >
                    <Link onClick={playClick} href={"/"} className="text-xl text-black font-semibold font-sans hover:text-[#4A3A3A]">JOYCE JEOUNG</Link>
                    <div className="mobile-menu block md:hidden">
                        {
                            !navbarOpen ? (
                                <button onClick={() => {setNavBarOpen(true); playClick();}} className="flex items-center px-3 py-2 text-black hover:text-[#4A3A3A]">
                                    <Bars3Icon className="h-5 w-5 stroke-[2]" />
                                </button>
                            ) : (
                                <button onClick={() => {setNavBarOpen(false); playClick();}} className="flex items-center px-3 py-2 text-black hover:text-[#4A3A3A]">
                                    <XMarkIcon className="h-5 w-5 stroke-[2.5]" />
                                </button>
                            )
                        }
                    </div>
                    <div className="menu hidden md:block md:w-auto" id="navbar">
                        <ul className="flex p-3 md:p-0 md:flex-row md:space-x-8 mt-0">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            </nav>
        </main>
    );
};

export default NavBar