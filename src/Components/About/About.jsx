import React from 'react'
import my from '../../assets/my.png'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="relative text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block">
          About Me
        </h1>
        <img 
          src={theme_pattern} 
          alt="" 
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-50"
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <img 
                src={my} 
                alt="DIlanka Rajapaksha" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Description Text */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                I am a passionate Junior Software Developer with hands-on experience in building real-world web applications and backend systems. Currently working at SUN-TWS TVS Group, I develop production dashboards, Kanban systems, and inventory solutions using PHP, JavaScript, and Microsoft SQL Server.

I enjoy building full-stack applications using React.js, Node.js, and MongoDB, with strong knowledge in REST APIs, authentication, and database design. I focus on writing clean, maintainable code and continuously improving my technical and problem-solving skills.

My goal is to grow into an Associate Software Engineer and contribute to building scalable and impactful software solutions.
              </p>
              {/* <p className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus a non nam 
                vitae repellendus mollitia aperiam explicabo cum. Iure atque maxime doloribus ullam! 
                Suscipit maxime quae aliquam explicabo dicta.
              </p> */}
            </div>

            {/* Skills Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h2>
              
              {/* Skills List */}
              <div className="space-y-6">
                {/* HTML & CSS */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">HTML & CSS</span>
                    {/* <span className="text-blue-600 font-medium">90%</span> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                </div>

                {/* React JS */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">React JS</span>
                    {/* <span className="text-blue-600 font-medium">85%</span> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                </div>

                {/* JavaScript */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">JavaScript</span>
                    {/* <span className="text-blue-600 font-medium">80%</span> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                </div>

                {/* Node JS */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Node JS</span>
                    {/* <span className="text-blue-600 font-medium">75%</span> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            {/* ONE Year Experience */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                ONE
              </h1>
              <p className="text-gray-600 font-medium mt-2 tracking-wider">
                YEAR EXPERIENCE
              </p>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Horizontal Divider - Visible on mobile */}
            <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* 20+ Projects */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                20+
              </h1>
              <p className="text-gray-600 font-medium mt-2 tracking-wider">
                PROJECTS COMPLETED
              </p>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Horizontal Divider - Visible on mobile */}
            <div className="md:hidden w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* 3+ Happy Clients */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                3+
              </h1>
              <p className="text-gray-600 font-medium mt-2 tracking-wider">
                HAPPY CLIENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About