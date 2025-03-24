"use client";
import { useState } from 'react';
import Hamburger from 'hamburger-react';

// Style consts
const aStyle = "font-popins font-medium text-lg group text-[#C9CCCA] transition-all duration-300 ease-in-out hover:text-white";
const spanStyle = "bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-250 ease-out";
const hamburgerAStyle = "font-sans font-medium text-[#FFD700] block px-4 py-3 mt-5";

function HamburgerMenu({ isOpen, setOpen }) {
    return (
        <div className='flex md:hidden items-center justify-end w-full h-full'>
            <Hamburger toggled={isOpen} toggle={setOpen} color='white' />

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className='absolute top-0 right-0 w-3/4 h-screen p-4 white items-center justify-center flex flex-col space-y-4'>
                    <Hamburger toggled={isOpen} toggle={setOpen} color='black' />
                    <li><a className={hamburgerAStyle} href="#">Home</a></li>
                    <li><a className={hamburgerAStyle} href="#">Education</a></li>
                    <li><a className={hamburgerAStyle} href="#">Projects</a></li>
                    <li><a className={hamburgerAStyle} href="#">Contact</a></li>
                </ul>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="relative top-0 w-full bg-[#2C2F36] h-[6rem] p-4 z-50">
            <div className='flex items-center justify-between h-full max-w-7xl mx-auto'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide'>
                    Aljaž Strnad
                </h1>
                <ul className="flex items-center justify-end h-full space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-20">
                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center justify-center h-full space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-20'>
                        <li><a className={aStyle} href="#"><span className={spanStyle}>Home</span></a></li>
                        <li><a className={aStyle} href="#"><span className={spanStyle}>Education</span></a></li>
                        <li><a className={aStyle} href="#"><span className={spanStyle}>Projects</span></a></li>
                        <li><a className={aStyle} href="#"><span className={spanStyle}>Contact</span></a></li>
                    </div>

                    {/* Hamburger Menu */}
                    <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
                </ul>
            </div>

        </nav>
    );
}