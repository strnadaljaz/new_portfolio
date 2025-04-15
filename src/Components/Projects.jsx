"use client";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "../utils/motion";

export default function Projects() {
    const projects = [
        { title: "TaskFall", image: "taskfall.png", description: "TaskFall is an online to-do app, made for my graduation thesis", link: "https://github.com/strnadaljaz/TaskFall" },
        { title: "Raylib Dino Dash", image: "dino.png", description: "A 2D game writen in C++ with raylib graphics", link: "https://github.com/strnadaljaz/RaylibDinoDash" },
    ];

    return (
        <div id="Projects" className="bg-[#2C2F36] lg:h-[75vh] sm:h-auto pb-12">
            <div className="flex justify-center items-center mb-15">
                <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">My Projects</span>
                </h1>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto px-4 md:px-6"
            >
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-[#BABDC4] text-black w-full sm:w-[350px] rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform transform hover:scale-105"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                            
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden bg-[#2C2F36] text-white font-medium rounded-lg text-base px-6 py-2.5 text-center group transition-all duration-300 flex items-center justify-center mt-2 border border-transparent hover:border-white/20"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    <span>View on GitHub</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 ml-2 transform transition-all duration-300 group-hover:translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                        />
                                    </svg>
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#2C2F36] to-[#3D4047] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                className="text-center mt-12"
            >
                <div className="inline-flex items-center justify-center">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gray-400"></div>
                    <p className="mx-6 text-gray-200 text-lg font-light drop-shadow-md">
                        <span className="text-shadow">Discover more on my</span>
                        <a
                            href="https://github.com/strnadaljaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 font-medium text-[#FFD700] hover:underline transition-all duration-300 drop-shadow-[0_0_3px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                        >
                            GitHub
                        </a>
                    </p>
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
            </motion.div>
        </div>
    );
}