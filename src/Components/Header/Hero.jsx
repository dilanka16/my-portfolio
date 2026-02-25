import React from 'react';
import my from '../../assets/my.png';
import dilanka from '../../assets/DIlanka Rajapaksha.pdf';

const Hero = () => {
    // Smooth scroll to contact section
    const handleConnect = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div 
            id='home' 
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden"
        >
            {/* Subtle background glow effect */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* Profile Image */}
            <div className="mb-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                    src={my} 
                    alt="Dilanka Rajapaksha" 
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white/90 mb-6">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dilanka Rajapaksha</span>, 
                <br />Full Stack Developer
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
                I work with Java, PHP, JavaScript, and Python, building full-stack applications using React.js and Node.js. I have experience with MySQL, Microsoft SQL Server, and MongoDB, and I use Git and Postman for version control and API testing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Connect With Me Button */}
                <div
                    onClick={handleConnect}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full 
                               cursor-pointer transition-all duration-300 transform hover:scale-105 
                               shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                               border border-white/10 text-center"
                >
                    Connect With Me
                </div>

                {/* My Resume Button */}
                <a href={dilanka} download className="block">
                    <div className="px-8 py-3 bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold rounded-full 
                                  border-2 border-blue-500/50 hover:border-purple-500/80 cursor-pointer 
                                  transition-all duration-300 transform hover:scale-105 
                                  shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-center
                                  hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                        My Resume
                    </div>
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/dilanka-rajapaksha-7790aa1b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300">
                        <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </div>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/dilanka16?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300">
                        <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Hero;