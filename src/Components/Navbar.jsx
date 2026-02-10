"use client";
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

// Style consts
const aStyle = "font-popins font-medium text-lg group text-[#C9CCCA] transition-all duration-300 ease-in-out hover:text-[#ffffff]";
const aPhoneStyle = "text-[#2C2F36] text-2xl";


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <nav className="relative top-0 w-full bg-[#2C2F36] h-[6rem] p-4 z-50">
            <div className='flex items-center justify-between h-full max-w-7xl mx-auto'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide'>
                    Aljaž Strnad
                </h1>
                <ul className="flex items-center justify-end h-full space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-20">
                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center justify-center h-full space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-20'>
                        <li><Link className={aStyle} href="/">Home</Link></li>
                        <li><a className={aStyle} href="/webpages">Webpages</a></li>
                        <li><a className={aStyle} href="#Contact">Contact</a></li>
                        <li><a className={aStyle} href="#Projects">Projects</a></li>
                        <li><a className={aStyle} href="#Skills">Skills</a></li>
                        <li><a className={aStyle} href="#Education">Education</a></li>
                        
                    </div>
                    {/* Hamburger button */}

                    <button 
                        className="md:hidden absolute right-4 top-4 focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className="block w-7 h-0.5 bg-[#F5F5DC] mb-1.5"></span>
                            <span className="block w-7 h-0.5 bg-[#F5F5DC] mb-1.5"></span>
                            <span className="block w-7 h-0.5 bg-[#F5F5DC]"></span>
                        </div>
                    </button>
                    {/* Hamburger Menu */} 
                </ul>
            </div>
        </nav>

{/* Mobile Menu Overlay */}
            <div 
                className={`md:hidden fixed inset-0 z-40 transition-opacity duration-800 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[100%] bg-[#9CA3AF] shadow-2xl z-[55] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button */}
                <button 
                    className="absolute top-6 right-6 p-2 focus:outline-none group"
                    onClick={() => setIsOpen(false)}
                    aria-label="Zapri meni"
                >
                    <svg 
                        className="w-8 h-8 text-[#2C2F36] transition-transform duration-300 group-hover:scale-110" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-col items-center space-y-8">
                        <li><Link className={aPhoneStyle} href="/">Home</Link></li>
                        <li><a className={aPhoneStyle} href="/webpages">Webpages</a></li>
                        <li><a className={aPhoneStyle} href="#Projects">Projects</a></li>
                        <li><a className={aPhoneStyle} href="#Skills">Skills</a></li>
                        <li><a className={aPhoneStyle} href="#Education">Education</a></li>
                        <li><a className={aPhoneStyle} href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
