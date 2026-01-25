"use client";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Webpages () {
    return (
        <div className="bg-[#2C2F36] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">Need a Webpage?</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl text-center">
                    I design and build modern, fast, and user-friendly websites tailored to your needs. Whether you need a portfolio, business site, or custom web app, let's bring your ideas to life!
                </p>
                <a href="mailto:aljaz.strnad@student.um.si" className="bg-[#FFD700] text-black font-bold rounded-full px-8 py-4 text-xl shadow-lg hover:bg-yellow-400 transition-all duration-300">
                    Contact Me
                </a>
            </main>
            <Footer />
        </div>
    );
}
