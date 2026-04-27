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
        Hi, I&apos;m <strong>M. Hassaan Qureshi</strong>, a passionate front-end developer and Computer Science graduate from Federal Urdu University of Science and Technology, Karachi. I&apos;m currently expanding my skills in full-stack development with a strong foundation in React.js, Next.js, JavaScript, TypeScript, HTML, and CSS.
        <br />
        <br />
        <strong>💼 Professional Experience:</strong><br />
        I recently completed a Cloud App Development & Maintenance internship at <strong>Systems Limited</strong>, where I developed and maintained web applications. During this internship, I built a full-stack &quot;Rent-a-Ride&quot; platform using Next.js and MongoDB, implementing authentication, booking features, and database optimization while collaborating with the team to ensure smooth deployment.
        <br />
        <br />
        <strong>📚 Additional Learning:</strong><br />
        I&apos;m enrolled in the Governor Sindh Initiative for AI, Web 3.0, and Metaverse (GIAIC), continuously exploring cutting-edge technologies. I also have experience with Python and C programming languages.
        <br />
        <br />
        My goal is to become a Full Stack Developer, and I&apos;m actively seeking opportunities to grow and contribute to innovative projects that bridge creativity with technology.
        <br />
        <br />
        🎯 Let&apos;s build something amazing together!
      </span>
    </motion.div>
  );
}
