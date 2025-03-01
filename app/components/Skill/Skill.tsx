"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    link: string;
}

export default function Skill({ link }: Props) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <motion.div 
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
            style={{ opacity, y }}
        >
            <Image src={link} alt="Skill Icon" width={100} height={100} />
        </motion.div>
    );
}