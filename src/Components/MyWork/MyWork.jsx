import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

// Technology icons (make sure react-icons is installed)
import { 
    FaReact, 
    FaNodeJs, 
    FaJsSquare, 
    FaHtml5, 
    FaCss3Alt, 
    FaGitAlt,
    FaDatabase,
    FaYoutube,
    FaTiktok,
    FaFacebook
} from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiMongodb, 
    SiExpress,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiFirebase,
    SiDjango,
    SiVuedotjs,
    SiPostgresql
} from 'react-icons/si';

// Helper function to get icon component based on technology name
const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    
    const iconMap = {
        'react': FaReact,
        'node': FaNodeJs,
        'nodejs': FaNodeJs,
        'javascript': FaJsSquare,
        'html': FaHtml5,
        'html5': FaHtml5,
        'css': FaCss3Alt,
        'css3': FaCss3Alt,
        'git': FaGitAlt,
        'database': FaDatabase,
        'mongodb': SiMongodb,
        'mongo': SiMongodb,
        'tailwind': SiTailwindcss,
        'tailwindcss': SiTailwindcss,
        'express': SiExpress,
        'photoshop': SiAdobephotoshop,
        'illustrator': SiAdobeillustrator,
        'firebase': SiFirebase,
        'django': SiDjango,
        'vue': SiVuedotjs,
        'postgresql': SiPostgresql,
        'youtube': FaYoutube,
        'tiktok': FaTiktok,
        'facebook': FaFacebook,
    };

    for (const [key, Icon] of Object.entries(iconMap)) {
        if (techLower.includes(key)) {
            return <Icon className="text-lg" title={tech} />;
        }
    }
    
    // Fallback icon
    return <FaReact className="text-lg opacity-50" title={tech} />;
};

const MyWork = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Define the filter categories (buttons)
    const filterCategories = ['All', 'Web Sites', 'Graphic Design', 'Social Media'];

    // Filter projects based on selected category
    const filteredProjects = mywork_data.filter(project => {
        if (selectedCategory === 'All') return true;
        if (selectedCategory === 'Web Sites') {
            // Include all projects that are NOT Graphic Design or Social Media
            return project.category !== 'Graphic Design' && project.category !== 'Social Media';
        }
        if (selectedCategory === 'Graphic Design') {
            return project.category === 'Graphic Design';
        }
        if (selectedCategory === 'Social Media') {
            return project.category === 'Social Media';
        }
        return false;
    });

    // Handle project click - open link if available
    const handleProjectClick = (link) => {
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div id='work' className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Header Section */}
            <div className="relative text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white/90 inline-block">
                    My Latest Work
                </h1>
                <img
                    src={theme_pattern}
                    alt=""
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-30 invert"
                />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filterCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                            selectedCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                : 'bg-white/5 text-gray-300 hover:bg-white/20 border border-white/10'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Work Grid */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((work, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/10"
                            onClick={() => handleProjectClick(work.link)}
                        >
                            {/* Work Image */}
                            <img
                                src={work.w_img}
                                alt={work.w_name}
                                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay with Project Info - Always visible */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {work.w_name}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {work.w_desc}
                                </p>

                                {/* Technology Stack with Icons */}
                                {work.technologies && work.technologies.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Technologies used</p>
                                        <div className="flex flex-wrap gap-3">
                                            {work.technologies.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20 text-white text-xs"
                                                >
                                                    <span className="text-base">{getTechIcon(tech)}</span>
                                                    <span>{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* View Project Button */}
                                <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                                    <span className="text-sm">View Project</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Category Badge - Always visible */}
                            {work.category && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                                    {work.category}
                                </div>
                            )}

                            {/* Subtle border glow on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="text-center mt-16 relative z-10">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-all duration-300 group border border-white/10">
                    <p className="text-lg">Show More</p>
                    <img
                        src={arrow_icon}
                        alt=""
                        className="w-5 h-5 filter brightness-0 invert transform group-hover:translate-x-2 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default MyWork;