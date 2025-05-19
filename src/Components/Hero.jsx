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

const projectsButtonStyle = `relative overflow-hidden text-white bg-transparent border-2 border-white hover:border-[#FFD700] font-medium rounded-full text-lg px-8 py-3 text-center group transition-all duration-300 hover:bg-[#FFD700]/10 hover:text-[#FFD700] shadow-lg hover:shadow-[#FFD700]/20`;

const cvButtonStyle = `relative overflow-hidden text-black bg-gradient-to-r from-[#FFD700] to-yellow-400 font-medium rounded-full text-lg px-8 py-3 text-center group transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transform hover:-translate-y-1`;

const Span = "text-[#9CA3AF]";

function HeroContent() {
    return (
        <div id="Hero" className="flex flex-col justify-center items-center h-full pt-[50px] pb-[70px] md:py-0 md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                className="flex justify-center items-center w-full md:w-1/2"
            >
                <img src="/profile.jpg" alt="Profile picture" className="w-[35vh] h-[35vh] md:w-[40vh] md:h-[40vh] lg:w-[45vh] lg:h-[45vh] rounded-full object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" />
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left"
            >
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-6xl m-4 sm:m-7">
                    Web <TypewriterText text="Developer" className="text-[#FFD700]" />
                </h1>
                <p className="text-white font-[poppins] text-lg sm:text-xl md:text-2xl lg:text-3xl m-4 sm:m-7">
                    Passionate about crafting <span className={Span}>modern</span>, responsive, and <span className={Span}>user-friendly</span> web experiences.
                    I specialize in <span className={Span}>frontend development</span> and love bringing creative ideas to life
                    through <span className={Span}>clean design</span> and <span className={Span}>smooth animations</span>.
                    <span className="text-[#FFD700]"> Let's build something amazing together!</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto mx-auto md:mx-0 space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-0 mt-4">
                    <button className={`${projectsButtonStyle} min-w-[180px] sm:min-w-[200px]`}>
                        <a href="#Projects" className="relative z-10 flex items-center justify-center">
                            <span>Explore Projects</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </button>
                    <button className={`${cvButtonStyle} min-w-[180px] sm:min-w-[200px]`}>
                        <a href="/cv.pdf" download="Aljaž_Strnad_CV" className="relative z-10 flex items-center justify-center">
                            <span>Download CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function Hero() {
    return (
        <div id="Home" className="relative bg-[#2C2F36] min-h-[calc(100vh-6rem)] flex items-center">
            <HeroContent />
        </div>
    );
}