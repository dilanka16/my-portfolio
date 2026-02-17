import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="relative text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block">
          My Services
        </h1>
        <img 
          src={theme_pattern} 
          alt="" 
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 md:w-32 opacity-50"
        />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services_Data.map((service, index) => {
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Service Number */}
                <div className="mb-6">
                  <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity">
                    {service.s_no}
                  </h3>
                </div>

                {/* Service Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.s_name}
                </h2>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.s_desc}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer group/link">
                  <p className="group-hover/link:mr-2 transition-all">Read More</p>
                  <img 
                    src={arrow_icon} 
                    alt="" 
                    className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform"
                  />
                </div>

                {/* Decorative Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Optional: Additional Services Message */}
      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg">
          Looking for something specific?{' '}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Let's talk
          </span>
        </p>
      </div>
    </div>
  )
}

export default Services