import React, { useState } from 'react';
import logo from '../../assets/dila.png'; // Ensure your logo is visible on dark backgrounds (consider using a light version)

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    const handleScroll = (section) => {
        setMenu(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between z-50'>
            {/* Logo */}
            <img
                src={logo}
                alt="Logo"
                className='h-12 w-auto cursor-pointer hover:scale-105 hover:brightness-125 transition-all duration-300'
                onClick={() => handleScroll('home')}
            />

            {/* Desktop Navigation Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-200 font-medium'>
                {['home', 'about', 'services', 'work', 'contact'].map((item) => (
                    <li key={item} className='relative cursor-pointer group'>
                        <p
                            onClick={() => handleScroll(item)}
                            className={`flex flex-col items-center px-1 py-2 text-sm uppercase tracking-wider font-semibold transition-all duration-300 
                                ${menu === item
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                                    : 'text-gray-300 group-hover:text-white'
                                }`}
                        >
                            <span>{item === 'work' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1)}</span>
                            {/* Animated underline */}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300 
                                    ${menu === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'}`}
                            />
                        </p>
                    </li>
                ))}
            </ul>

            {/* Connect Button */}
            <div
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full cursor-pointer 
                           hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300 
                           font-medium text-sm md:text-base whitespace-nowrap border border-white/20'
                onClick={() => handleScroll('contact')}
            >
                Connect With Me
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden flex flex-col gap-1.5 p-2 group'>
                <span className='w-6 h-0.5 bg-gray-300 rounded-full transition-all group-hover:w-8 group-hover:bg-white'></span>
                <span className='w-6 h-0.5 bg-gray-300 rounded-full transition-all group-hover:w-8 group-hover:bg-white'></span>
                <span className='w-6 h-0.5 bg-gray-300 rounded-full transition-all group-hover:w-8 group-hover:bg-white'></span>
            </button>
        </div>
    );
};

export default Navbar;