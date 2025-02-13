"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth"; 
    }, []);

    return (
        <>
           
            <nav className="hidden lg:flex fixed top-0 left-0 h-full w-20 bg-black text-white p-6 flex-col">
                <ul className="space-y-12 text-xl flex flex-col justify-center mt-10">
                    {navLinks.map(({ href, src, alt }, index) => (
                        <motion.li key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }}>
                            <ScrollLink href={href}>
                                <Image src={src} width={40} height={40} alt={alt} />
                            </ScrollLink>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            
            <nav className="lg:hidden fixed bottom-2 left-6 w-[90%] bg-black text-white p-4 rounded-2xl z-50">
                <ul className="flex justify-around text-lg">
                    {navLinks.map(({ href, src, alt }, index) => (
                        <motion.li key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }}>
                            <ScrollLink href={href}>
                                <Image src={src} width={30} height={30} alt={alt} />
                            </ScrollLink>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

// Navigation Links Array
const navLinks = [
    { href: "#Home", src: "/images/home.png", alt: "Home" },
    { href: "#About", src: "/images/user.png", alt: "About" },
    { href: "#Projects", src: "/images/project.png", alt: "About" },
    { href: "#Skills", src: "/images/skills.png", alt: "Skills" },
    { href: "#projects", src: "/images/education.png", alt: "Projects" },
    { href: "#contact", src: "/images/mail.png", alt: "Contact" },
];

// Custom Smooth Scroll Link Component
const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <Link href={href} onClick={handleClick}>
            {children}
        </Link>
    );
};
