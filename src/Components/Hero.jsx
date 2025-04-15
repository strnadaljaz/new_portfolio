"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInLeft, fadeInUp } from "../utils/motion";

function TypewriterText({ text, className }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            // Current text being typed
            const updatedText = isDeleting 
                ? text.substring(0, displayedText.length - 1)
                : text.substring(0, displayedText.length + 1);
            
            setDisplayedText(updatedText);
            
            // Speed control
            if (isDeleting) {
                setTypingSpeed(75); // Faster when deleting
            } else {
                setTypingSpeed(150); // Normal speed when typing
            }
            
            // If finished typing
            if (!isDeleting && updatedText === text) {
                // Wait before starting to delete
                setTimeout(() => setIsDeleting(true), 2000);
            } 
            // If finished deleting
            else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                // Slight pause before typing again
                setTypingSpeed(500);
            }
        };
        
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, text, typingSpeed]);

    // Cursor blink effect
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && <span className="animate-pulse">|</span>}
        </span>
    );
}

const projectsButtonStyle = `text-black bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-4 text-center me-2 mb-2 hover:scale-105 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out`;

const cvButtonStyle = `text-black bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 hover:scale-105 hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 ease-in-out`;

const Span = "text-[#9CA3AF]";

function HeroContent() {
    return (
        <div className="flex flex-col justify-center items-center h-full md:flex-row space-y-8 md:space-y-0 md:space-x-8">
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
                <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl m-7">
                    Frontend <TypewriterText text="Developer" className="text-[#FFD700]" />
                </h1>
                <p className="text-white font-[poppins] text-xl sm:text-3xl m-7">
                    Passionate about crafting <span className={Span}>modern</span>, responsive, and <span className={Span}>user-friendly</span> web experiences.
                    I specialize in <span className={Span}>frontend development</span> and love bringing creative ideas to life
                    through <span className={Span}>clean design</span> and <span className={Span}>smooth animations</span>.
                    <span className="text-[#FFD700]"> Let's build something amazing together!</span>
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
        </div>
    );
}

export default function Hero() {
    return (
        <div id="Home" className="relative bg-[#2C2F36] h-[calc(100vh-6rem)] flex items-center">
            <HeroContent />
        </div>
    );
}