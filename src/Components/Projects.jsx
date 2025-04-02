import { div } from "framer-motion/client";

export default function Projects() {
    const projects = [
        { title: "TaskFall", image: "taskfall.png", description: "TaskFall is an online to-do app, made for my graduation thesis", link: "https://github.com/strnadaljaz" },
        { title: "Raylib Dino Dash", image: "dino.png", description: "A 2D game writen in C++ with raylib graphics", link: "https://github.com/strnadaljaz/RaylibDinoDash" },
    ];

    return (
        <div id="Projects" className="bg-[#2C2F36] h-[80vh]">
            <div className="flex justify-center items-center" >
                <h1>MY PROJECTS</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                {
                    projects.map((project) => (
                        <div key={project.title} className="bg-white text-black h-[50vh] w-80 rounded-lg shadoww-lg p-4 text-center transition-transform transform hover:scale-105">
                            <img src={project.image} alt="project-image" className="w-full h-40 object-cover rounded-t-lg" />
                            <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
                            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                            <button className="btn btn-outline border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View on Github</a>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}