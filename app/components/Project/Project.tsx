"use client"; 

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Props {
    image: string;
    link: string;
}

export default function Project({ image, link }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            ref={ref}
            className="relative w-full bg-white drop-shadow-[8px_8px_10px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden"
            whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            style={{ perspective: 1000, opacity, y: translateY }} 
        >
           
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-purple-500 to-blue-500 opacity-50 blur-2xl z-0"></div>

            
            <motion.div className="relative z-10">
                <Link href={link}>
                    <Image
                        src={image}
                        alt="profile"
                        width={250}
                        height={200}
                        className="rounded-lg"
                    />
                </Link>
            </motion.div>
        </motion.div>
    );
}
