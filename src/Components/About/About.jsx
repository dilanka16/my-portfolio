import React from 'react';
import my from '../../assets/my.png';
import theme_pattern from '../../assets/theme_pattern.svg'; // This might need adjustment for dark mode (invert or replace)

const About = () => {
    return (
        <div id='about' className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background glow effects */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Header Section */}
            <div className="relative text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white/90 inline-block">
                    About Me
                </h1>
                {/* Optional: Replace theme_pattern with a dark-adapted version or use a CSS line */}
                <img
                    src={theme_pattern}
                    alt=""
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-30 invert" // invert for dark mode (if applicable)
                />
            </div>

            {/* Main Content Section */}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                            <img
                                src={my}
                                alt="Dilanka Rajapaksha"
                                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10 transform group-hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 space-y-8">
                        {/* Description Text */}
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow">
                                I am a passionate Junior Software Developer with hands-on experience in building real-world web applications and backend systems. Currently working at SUN-TWS TVS Group, I develop production dashboards, Kanban systems, and inventory solutions using PHP, JavaScript, and Microsoft SQL Server.
                                <br /><br />
                                I enjoy building full-stack applications using React.js, Node.js, and MongoDB, with strong knowledge in REST APIs, authentication, and database design. I focus on writing clean, maintainable code and continuously improving my technical and problem-solving skills.
                                <br /><br />
                                My goal is to grow into an Associate Software Engineer and contribute to building scalable and impactful software solutions.
                            </p>
                        </div>

                        {/* Skills Section (quick tags) */}
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-inner">
                            <h2 className="text-2xl font-semibold text-white/90 mb-6">Core Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">Java</span>
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">PHP</span>
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">JavaScript</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg font-medium border border-purple-500/30">React.js</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg font-medium border border-purple-500/30">Node.js</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg font-medium border border-green-500/30">MySQL</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg font-medium border border-green-500/30">MongoDB</span>
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg font-medium border border-orange-500/30">Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-white/90 mb-8 text-center md:text-left">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Programming Languages */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white/90">Programming Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">Java</span>
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">PHP</span>
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">JavaScript</span>
                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">Python</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">OOP</span>
                            </div>
                        </div>

                        {/* Frontend Technologies */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white/90">Frontend Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">HTML5</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">CSS3</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">JavaScript</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">React.js</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">Tailwind CSS</span>
                                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">Bootstrap</span>
                            </div>
                        </div>

                        {/* Databases & Backend */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white/90">Databases & Backend</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">MySQL</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">MS SQL Server</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">MongoDB</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">Node.js</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">PHP Backend</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">Auth</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">DB Design</span>
                            </div>
                        </div>

                        {/* Tools & Dev Practices */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white/90">Tools & Dev Practices</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30">Git</span>
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30">Postman</span>
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30">Version Control</span>
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30">API Testing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="max-w-6xl mx-auto mt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-white/90 mb-8 text-center md:text-left">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
                    </h2>

                    <div className="space-y-8">
                        {/* University of Ruhuna */}
                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-white/10">
                            <div className="md:w-20 flex justify-center md:justify-start">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-white/90">University of Ruhuna</h3>
                                    <span className="text-blue-400 font-semibold">2020 - 2023</span>
                                </div>
                                <p className="text-lg text-gray-300 mb-3 font-medium">Bachelor of Science</p>
                                <p className="text-gray-400 mb-2">
                                    <span className="font-semibold text-gray-200">Relevant coursework:</span> Applied Mathematics, Mathematics, Computer Science.
                                </p>
                                <p className="text-gray-400">
                                    <span className="font-semibold text-gray-200">Achievements:</span> Strong foundation in analytical thinking, problem-solving, and computational concepts.
                                </p>
                            </div>
                        </div>

                        {/* Mahinda College Galle */}
                        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-white/10">
                            <div className="md:w-20 flex justify-center md:justify-start">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-white/90">Mahinda College Galle</h3>
                                    <span className="text-purple-400 font-semibold">2008 - 2019</span>
                                </div>
                                <p className="text-lg text-gray-300 mb-3 font-medium">Secondary Education</p>
                                <p className="text-gray-400">
                                    Completed secondary education with focus on Mathematics and Science streams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-4xl mx-auto mt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                        {/* ONE Year Experience */}
                        <div className="text-center flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                ONE
                            </h1>
                            <p className="text-gray-400 font-medium mt-2 tracking-wider">
                                YEAR EXPERIENCE
                            </p>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                        <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        {/* 20+ Projects */}
                        <div className="text-center flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                20+
                            </h1>
                            <p className="text-gray-400 font-medium mt-2 tracking-wider">
                                PROJECTS COMPLETED
                            </p>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                        <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        {/* 98% Happy Clients */}
                        <div className="text-center flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                98%
                            </h1>
                            <p className="text-gray-400 font-medium mt-2 tracking-wider">
                                HAPPY CLIENTS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default About;