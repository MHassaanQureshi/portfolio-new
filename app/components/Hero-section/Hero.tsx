"use client";

import { motion } from "framer-motion";
import Profile from "../profile/Profile";
import Button from "../buttons/Button";
import SimBut from "../SimBut/SimBut";

export default function Hero() {
    return (
        <motion.div
            className="w-full min-h-screen flex mt-[100%] gap-4 flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-40 md:mt-[10%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            >
                <Profile />
            </motion.div>

            <motion.div
                className="w-full mt-10 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            >
                <motion.span
                    className="text-3xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                >
                    M.HASSAAN QURESHI
                </motion.span>
                
                <motion.span
                    className="text-xl md:text-2xl font-extralight mt-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                >
                    FRONT-END DEVELOPER
                </motion.span>

                <motion.div
                    className="flex flex-col gap-4 mt-8 align-middle items-center md:flex-row"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 80 }}
                    >
                        <Button text="RESUME" link="/Resume.pdf"  />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 80 }}
                    >
                        <SimBut text="CONTACT" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
