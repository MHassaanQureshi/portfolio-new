"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
    link: string;
}

export default function Skill({ link }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.1"] });
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -30]);

    return (
        <motion.div
            ref={ref}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
            style={{ opacity, y }}
        >
            <Image src={link} alt="Skill Icon" width={100} height={100} />
        </motion.div>
    );
}