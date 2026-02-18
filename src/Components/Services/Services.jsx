import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id='services' className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background glow effects */}
            <div className="absolute top-40 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Header Section */}
            <div className="relative text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white/90 inline-block">
                    My Services
                </h1>
                <img
                    src={theme_pattern}
                    alt=""
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-30 invert"
                />
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Services_Data.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Background gradient glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Service Number */}
                                <div className="mb-6 relative">
                                    <h3 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 group-hover:opacity-50 transition-opacity">
                                        {service.s_no}
                                    </h3>
                                </div>

                                {/* Service Name */}
                                <h2 className="text-2xl font-bold text-white/90 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                    {service.s_name}
                                </h2>

                                {/* Service Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.s_desc}
                                </p>

                                {/* Read More Link */}
                                <div className="flex items-center gap-2 text-blue-400 font-medium cursor-pointer group/link relative z-10">
                                    <p className="group-hover/link:mr-2 transition-all">Read More</p>
                                    <img
                                        src={arrow_icon}
                                        alt=""
                                        className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform filter brightness-0 invert opacity-70 group-hover/link:opacity-100"
                                    />
                                </div>

                                {/* Animated border on hover */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Optional: Additional Services Message */}
            <div className="text-center mt-16 relative z-10">
                <p className="text-gray-400 text-lg">
                    Looking for something specific?{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold cursor-pointer hover:underline">
                        Let's talk
                    </span>
                </p>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Services;