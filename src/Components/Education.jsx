"use client"
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

export default function Education () {
    const educationData = [
        {
            degree: "Computer Technician",
            institution: "Secondary Electrical and Computer School Maribor",
            duration: "2021 - 2025",
            description: "Specialized in computer science with focus on programming, web development, and network administration. Gained strong foundations in HTML/CSS, JavaScript, and C++. Completed graduation thesis project 'TaskFall' - an online task management application.",
            logo: "/icons/sers.webp", 
        },
        {
            degree: "Computer Engineering",
            institution: "Faculty of Electrical Engineering, Computer Science and Informatics",
            duration: "2025 - Present",
            description: "",
            logo: "/icons/feri.webp",
        },
    ];

    return (
        <div id="Education" className="bg-[#2C2F36] min-h-[70vh] py-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">
                        Education
                    </span>
                </h1>
                <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto px-4">
                    My academic journey and continuous learning path that has shaped my technical skills.
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="space-y-12">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeInUp}
                            custom={index}
                            className="bg-[#363A45] rounded-xl p-6 md:p-8 shadow-xl border border-gray-700 hover:border-[#FFD700]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                <div className="bg-[#BABDC4] rounded-full p-4 w-24 h-24 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                                    <img 
                                        src={item.logo} 
                                        alt={`${item.institution} logo`} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                                        <span className="text-[#FFD700] font-medium mt-2 md:mt-0">{item.duration}</span>
                                    </div>
                                    <h4 className="text-xl text-gray-300 mb-4">{item.institution}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
                            <span className="text-shadow">Always learning, always growing</span>
                        </p>
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gray-400"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}