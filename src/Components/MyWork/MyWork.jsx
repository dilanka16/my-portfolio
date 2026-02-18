import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    return (
        <div id='work' className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background glow effects */}
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

            {/* Work Grid */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mywork_data.map((work, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/10"
                            >
                                {/* Work Image */}
                                <img
                                    src={work.w_img}
                                    alt={`Work ${index + 1}`}
                                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay with Project Info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {work.w_name || `Project ${index + 1}`}
                                    </h3>
                                    <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {work.w_desc || 'Click to view project details'}
                                    </p>

                                    {/* View Project Button */}
                                    <div className="mt-4 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <span className="text-sm">View Project</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                {work.category && (
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {work.category}
                                    </div>
                                )}

                                {/* Subtle border glow on hover */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
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