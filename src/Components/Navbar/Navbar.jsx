import React, { useState } from 'react'
import logo from '../../assets/dila.png'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    // Smooth scroll function
    const handleScroll = (section) => {
        setMenu(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between z-50'>
            {/* Logo */}
            <img 
                src={logo} 
                alt="Logo" 
                className='h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-300'
                onClick={() => handleScroll('home')}
            />
            
            {/* Desktop Navigation Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
                <li className='relative cursor-pointer group'>
                    <p 
                        onClick={() => handleScroll('home')}
                        className='flex flex-col items-center hover:text-blue-600 transition-colors duration-300'
                    >
                        <span>Home</span>
                        {menu === "home" && (
                            <img src={underline} alt='' className='absolute -bottom-2 w-full h-1' />
                        )}
                    </p>
                </li>
                
                <li className='relative cursor-pointer group'>
                    <p 
                        onClick={() => handleScroll('about')}
                        className='flex flex-col items-center hover:text-blue-600 transition-colors duration-300'
                    >
                        <span>About Me</span>
                        {menu === "about" && (
                            <img src={underline} alt='' className='absolute -bottom-2 w-full h-1' />
                        )}
                    </p>
                </li>
                
                <li className='relative cursor-pointer group'>
                    <p 
                        onClick={() => handleScroll('services')}
                        className='flex flex-col items-center hover:text-blue-600 transition-colors duration-300'
                    >
                        <span>Services</span>
                        {menu === "services" && (
                            <img src={underline} alt='' className='absolute -bottom-2 w-full h-1' />
                        )}
                    </p>
                </li>
                
                <li className='relative cursor-pointer group'>
                    <p 
                        onClick={() => handleScroll('work')}
                        className='flex flex-col items-center hover:text-blue-600 transition-colors duration-300'
                    >
                        <span>Portfolio</span>
                        {menu === "work" && (
                            <img src={underline} alt='' className='absolute -bottom-2 w-full h-1' />
                        )}
                    </p>
                </li>
                
                <li className='relative cursor-pointer group'>
                    <p 
                        onClick={() => handleScroll('contact')}
                        className='flex flex-col items-center hover:text-blue-600 transition-colors duration-300'
                    >
                        <span>Contact</span>
                        {menu === "contact" && (
                            <img src={underline} alt='' className='absolute -bottom-2 w-full h-1' />
                        )}
                    </p>
                </li>
            </ul>

            {/* Connect Button */}
            <div 
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap'
                onClick={() => handleScroll('contact')}
            >
                Connect With Me
            </div>

            {/* Mobile Menu Button - Optional */}
            <button className='md:hidden flex flex-col gap-1.5 p-2'>
                <span className='w-6 h-0.5 bg-gray-700 rounded-full'></span>
                <span className='w-6 h-0.5 bg-gray-700 rounded-full'></span>
                <span className='w-6 h-0.5 bg-gray-700 rounded-full'></span>
            </button>
        </div>
    )
}

export default Navbar