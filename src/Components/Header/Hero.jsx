import React from 'react'
import my from '../../assets/my.png'
import dilanka from '../../assets/dilanka.pdf'

const Hero = () => {
  return (
    <div id='home' className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Profile Image */}
      <div className="mb-8">
        <img 
          src={my} 
          alt="DIlanka Rajapaksha" 
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-6">
        I'm <span className="text-blue-600">DIlanka Rajapaksha</span>, 
        <br />Full Stack Developer
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-10 leading-relaxed">
        I work with Java, PHP, JavaScript, and Python, building full-stack applications using React.js and Node.js. I have experience with MySQL, Microsoft SQL Server, and MongoDB, and I use Git and Postman for version control and API testing.

      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Connect With Me Button */}
        <div className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full 
                      hover:bg-blue-700 cursor-pointer transition-all duration-300 
                      transform hover:scale-105 shadow-md hover:shadow-lg
                      text-center">
          Connect With Me
        </div>

        {/* My Resume Button */}
        <a href={dilanka}>
        <div className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full 
                      border-2 border-blue-600 hover:bg-blue-50 cursor-pointer 
                      transition-all duration-300 transform hover:scale-105 
                      shadow-md hover:shadow-lg text-center">
          My Resume
        </div>
        </a>
      </div>

      {/* Optional: Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Hero