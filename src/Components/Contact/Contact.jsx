import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');

        const formData = new FormData(event.target);
        formData.append('access_key', 'f03d0224-fd00-4ff2-af5c-566aed1c6c4e');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully');
            event.target.reset();

            setTimeout(() => setResult(''), 5000);
        } else {
            setResult('Error: ' + (data.message || 'Something went wrong'));
            setTimeout(() => setResult(''), 5000);
        }
    };

    return (
        <div id='contact' className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle background glow effects */}
            <div className="absolute top-40 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Header Section */}
            <div className="relative text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white/90 inline-block">
                    Get in touch
                </h1>
                <img
                    src={theme_pattern}
                    alt=""
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-30 invert"
                />
            </div>

            {/* Contact Content */}
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column - Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
                                Let's talk
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your ideas to life.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 border border-blue-500/30">
                                    <img
                                        src={mail_icon}
                                        alt="Email"
                                        className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Email</p>
                                    <p className="text-gray-300 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                        savindudilanka16@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 border border-blue-500/30">
                                    <img
                                        src={call_icon}
                                        alt="Phone"
                                        className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                                    <p className="text-gray-300 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                        +94 71 629 5330
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 border border-blue-500/30">
                                    <img
                                        src={location_icon}
                                        alt="Location"
                                        className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Location</p>
                                    <p className="text-gray-300 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                        Galle, Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <p className="text-gray-400 mb-4">Follow me on:</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/share/1F5rLiCMqJ/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-white/10 group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-white/10 group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.775-4.768 13.94 13.94 0 001.543-6.05c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dilanka-rajapaksha-7790aa1b1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-white/10 group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-2/3">
                        <form onSubmit={onSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 md:p-10 space-y-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="block text-gray-300 font-medium text-lg">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-200 placeholder-gray-500"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="block text-gray-300 font-medium text-lg">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-200 placeholder-gray-500"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="block text-gray-300 font-medium text-lg">
                                    Write Your Message Here
                                </label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Enter Your Message"
                                    className="w-full px-6 py-4 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-200 placeholder-gray-500 resize-none"
                                    required
                                />
                            </div>

                            {/* Result Message */}
                            {result && (
                                <div
                                    className={`text-center p-4 rounded-xl border ${
                                        result.includes('Successfully')
                                            ? 'bg-green-500/20 text-green-300 border-green-500/30'
                                            : result.includes('Sending')
                                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                            : 'bg-red-500/20 text-red-300 border-red-500/30'
                                    }`}
                                >
                                    {result}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10"
                                disabled={result === 'Sending....'}
                            >
                                {result === 'Sending....' ? 'Sending...' : 'Submit Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Contact;