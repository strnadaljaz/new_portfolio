"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

export default function Skills() {
    const skills = [
        {
            category: "Frontend",
            technologies: [
                { name: "HTML", icon: "/icons/html.svg" },
                { name: "CSS", icon: "/icons/css.svg" },
                { name: "JavaScript", icon: "/icons/javascript.svg" },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Next.js", icon: "/icons/nextjs.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
            ]
        },
        {
            category: "Backend",
            technologies: [
                { name: "Node.js", icon: "/icons/nodejs.svg" },
                { name: "MySQL", icon: "/icons/mysql.svg" },
                { name: "Firebase", icon: "/icons/firebase.svg" },
            ]
        },
        {
            category: "Tools",
            technologies: [
                { name: "Git", icon: "/icons/git.svg" },
                { name: "GitHub", icon: "/icons/github.svg" },
            ]
        },
        {
            category: "Game Development",
            technologies: [
                { name: "C++", icon: "/icons/c++.svg" },
                { name: "Raylib", icon: "/icons/raylib.svg" },
            ]
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div id="Skills" className="bg-[#2C2F36] min-h-[70vh] py-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">
                        My Skills
                    </span>
                </h1>
                <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto px-4">
                    These are the technologies and tools I've been working with to build modern, 
                    responsive, and user-friendly web applications and 2D games.
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4">
                {skills.map((skillGroup, index) => (
                    <motion.div 
                        key={skillGroup.category}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInUp}
                        custom={index}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 text-center sm:text-left">
                            <span className="border-b-2 border-[#FFD700] pb-1">
                                {skillGroup.category}
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {skillGroup.technologies.map((tech) => (
                                <motion.div 
                                    key={tech.name}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-[#BABDC4] rounded-lg p-4 flex flex-col items-center justify-center shadow-lg border border-gray-700 hover:border-[#FFD700]/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                                        <img src={tech.icon} alt={`${tech.name} icon`} className="w-full h-full object-contain" />
                                    </div>
                                    <p className="text-[#363A45] font-medium text-sm">{tech.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}