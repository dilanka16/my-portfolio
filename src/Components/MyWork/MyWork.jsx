import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="relative text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block">
          My Latest Work
        </h1>
        <img 
          src={theme_pattern} 
          alt="" 
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-50"
        />
      </div>

      {/* Work Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mywork_data.map((work, index) => {
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Work Image */}
                <img 
                  src={work.w_img} 
                  alt={`Work ${index + 1}`} 
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Project Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Project {index + 1}
                  </h3>
                  <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    Click to view project details
                  </p>
                  
                  {/* View Project Button */}
                  <div className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span className="text-sm font-medium">View Project</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Optional: Category Badge */}
                {work.category && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.category}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Show More Button */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
          <p className="text-lg">Show More</p>
          <img 
            src={arrow_icon} 
            alt="" 
            className="w-5 h-5 filter brightness-0 invert transform group-hover:translate-x-2 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Optional: Filter Categories */}
      {/* <div className="flex justify-center gap-4 mt-12 flex-wrap">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          All
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-md">
          Web Development
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-md">
          Mobile Apps
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-md">
          UI/UX Design
        </button>
      </div> */}
    </div>
  )
}

export default MyWork