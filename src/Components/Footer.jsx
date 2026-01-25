"use client"
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();
 
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
                            <li><a href="/" className="text-gray-400 hover:text-[#FFD700] transition-colors">Home</a></li>
                            <li><a href="/webpages" className="text-gray-400 hover:text-[#FFD700] transition-colors">Webpages</a></li> 
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
                            <a href="https://github.com/strnadaljaz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/aljaz-strnad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100069636173174" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/strnadaljaz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
</a>
                        </div>
                        <p className="text-gray-400 mt-4">
                            <a href="mailto:aljaz.strnad@student.um.si" className="hover:text-[#ffd700] transition-colors">aljaz.strnad@student.um.si</a>

                        </p>
                        <p className="text-gray-400 mt-1">
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
