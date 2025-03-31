"use client";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const projectsButtonStyle = `text-black bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-4 text-center me-2 mb-2 hover:scale-105 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out`;

const cvButtonStyle = `text-black bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 ease-in-out`;

const Span = "text-[#9CA3AF]";

function HeroContent() {
    return (
        <div className="flex flex-col justify-center items-center h-auto md:h[80vh] md:flex-row pt-[15vh] sm:pt-[20vh] md:pt-[2rem] space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                className="flex justify-center items-center w-full md:w-1/2"
            >
                <img src="/profile.jpg" alt="Profile picture" className="w-[45vh] h-[45vh] rounded-full object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" />
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left"
            >
                <h1 className="text-white text-5xl sm:text-7xl m-7">Frontend <span className="text-[#FFD700]">Developer</span></h1>
                <p className="text-white font-[poppins] text-xl sm:text-3xl m-7">
                    Passionate about crafting <span className={Span}>modern</span>, responsive, and <span className={Span}>user-friendly</span> web experiences.
                    I specialize in <span className={Span}>frontend development</span> and love bringing creative ideas to life
                    through <span className={Span}>clean design</span> and <span className={Span}>smooth animations</span>.
                    <span className="text-[#FFD700]"> Let’s build something amazing together!</span>
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <button className={projectsButtonStyle}>
                        <a href="#Projects">Explore Projects</a>
                    </button>
                    <button className={cvButtonStyle}>
                        <a href="/cv.pdf" download="Aljaž_Strnad_CV">
                            Download CV
                        </a>
                    </button>
                </div>
            </motion.div>
        </div >
    );
}

export default function Hero() {
    return (
        <div id="Home" className="relative bg-[#2C2F36] h-auto min-h-[80vh] flex items-center">
            <HeroContent />
        </div>
    );
}