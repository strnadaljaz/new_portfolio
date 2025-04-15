"use client";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "../utils/motion";

export default function Projects() {
    const projects = [
        { title: "TaskFall", image: "taskfall.png", description: "TaskFall is an online to-do app, made for my graduation thesis", link: "https://github.com/strnadaljaz/TaskFall" },
        { title: "Raylib Dino Dash", image: "dino.png", description: "A 2D game writen in C++ with raylib graphics", link: "https://github.com/strnadaljaz/RaylibDinoDash" },
    ];

    return (
        <div id="Projects" className="bg-[#2C2F36] lg:h-[80vh] sm:h-auto">
            <div className="flex justify-center items-center">
                <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">My Projects</span>
                </h1>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex flex-wrap justify-center items-center gap-6 p-6"
            >
                {projects.map((project) => (
                    <div key={project.title} className="bg-white text-black h-[50vh] w-80 rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105">
                        <img src={project.image} alt="project-image" className="w-full h-40 object-cover rounded-t-lg" />
                        <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
                        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                        <button className="btn btn-outline">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View on Github</a>
                        </button>
                    </div>
                ))}
            </motion.div>
            {/* Add the "See All Projects" button */}
            <div className="flex justify-center mt-8">
                <button className="btn btn-outline btn-warning">
                    <a href="/projects" target="_self">See All Projects</a>
                </button>
            </div>
        </div>
    );
}