"use client"; // If you're using Next.js App Router, add this at the top

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col mt-56 w-[90%] h-[90%] bg-white border-black border-2 items-center p-6 rounded-tr-3xl rounded-bl-3xl opacity-0 md:mt-32 md:w-[70%]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span className="text-2xl font-extrabold">ABOUT ME</span>
      <span className="text-center mt-4">
        Hi, I&apos;m Hassaan, a passionate front-end developer dedicated to crafting interactive and visually appealing web experiences. I specialize in React, Next.js, TypeScript, and Tailwind CSS, constantly pushing my limits to build efficient, scalable, and user-friendly applications.
        <br />
        <br />
        Currently, I&apos;m expanding my skills in full-stack development while pursuing my Computer Science degree at Federal Urdu University Karachi. Additionally, I&apos;m enrolled in the Governor Sindh Initiative for AI, Web 3.0, and Metaverse, where I continuously explore cutting-edge technologies.
        <br />
        <br />
        Over time, I&apos;ve worked on several projects, including a resume generator, an eCommerce website, a fashion app landing page, and a Facebook clone. I&apos;ve also participated in a 7-day hackathon, where I built a fully functional website using Sanity.io as the CMS and delivered a business pitch deck.
        <br />
        <br />
        Beyond development, I enjoy tackling new challenges, optimizing performance, and improving user experiences. I aim to contribute to innovative projects that bridge creativity with technology.
        <br />
        <br />
        🚀 Let&apos;s build something amazing together!
      </span>
    </motion.div>
  );
}
