"use client"
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: "github", url: "https://github.com/strnadaljaz", label: "GitHub" },
        { icon: "linkedin", url: "https://www.linkedin.com/in/alja%C5%BE-strnad-678489295/?originalSubdomain=si", label: "LinkedIn" },
        // Add any other social media platforms you use
    ];
    
    return (
        <footer className="bg-[#262930] py-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Logo & Description */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">Aljaž Strnad</h3>
                        <p className="text-gray-400 mb-4">Building modern web applications with passion and precision.</p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#Hero" className="text-gray-400 hover:text-[#FFD700] transition-colors">Home</a></li>
                            <li><a href="#Education" className="text-gray-400 hover:text-[#FFD700] transition-colors">Education</a></li>
                            <li><a href="#Skills" className="text-gray-400 hover:text-[#FFD700] transition-colors">Skills</a></li>
                            <li><a href="#Projects" className="text-gray-400 hover:text-[#FFD700] transition-colors">Projects</a></li>
                            <li><a href="#Contact" className="text-gray-400 hover:text-[#FFD700] transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* Connect */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            {socialLinks.map((link) => (
                                <a 
                                    key={link.icon}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="text-gray-400 hover:text-[#FFD700] transition-colors p-2"
                                >
                                    <img 
                                        src={`/icons/${link.icon}.svg`} 
                                        alt={link.label} 
                                        className="w-6 h-6"
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 mt-4">
                            <a href="mailto:strnadaljaz23@gmail.com" className="hover:text-[#FFD700] transition-colors">
                                strnadaljaz23@gmail.com
                            </a>
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-8 pt-6 border-t border-gray-800 text-center"
                >
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-6"></div>
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Aljaž Strnad. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                        Built with React & Next.js
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}