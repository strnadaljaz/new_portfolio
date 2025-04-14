"use client";
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useEffect, useRef } from 'react';

// Style consts
const aStyle = "font-popins font-medium text-lg group text-[#C9CCCA] transition-all duration-300 ease-in-out hover:text-white";
const spanStyle = "bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-250 ease-out";
const hamburgerAStyle = "font-sans font-medium text-[#FFD700] block px-4 py-3";

function HamburgerMenu({ isOpen, setOpen }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, setOpen]);

    return (
        <div className='flex md:hidden items-center justify-end w-full h-full relative' ref={menuRef}>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color='white'
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                role="button"
            />

            {/* Dropdown menu */}
            <div className={`absolute top-full right-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul
                    role="menu"
                    className='w-64 bg-[#2C2F36] p-4 rounded-lg shadow-lg flex flex-col space-y-4 z-50 mt-2'
                >
                    {[
                        { label: 'Home', href: '#' },
                        { label: 'Education', href: '#' },
                        { label: 'Skills', href: '#' },
                        { label: 'Projects', href: '#Projects' },
                        { label: 'Contact', href: '#' }
                    ].map((item) => (
                        <li key={item.label} role="none">
                            <a
                                role="menuitem"
                                href={item.href}
                                className="block px-4 py-2 text-white hover:bg-[#3B3F48] rounded-md transition-colors"
                                onClick={() => setOpen(false)}
                                tabIndex={isOpen ? 0 : -1}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
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
                        <li><a className={aStyle} href="#"><span className={spanStyle}>Skills</span></a></li>
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