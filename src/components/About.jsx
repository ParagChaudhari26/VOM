import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            About Us
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We are dedicated to creating exceptional digital experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl mb-4 text-gray-800">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver innovative solutions that drive success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl mb-4 text-gray-800">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where technology empowers everyone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl mb-4 text-gray-800">Values</h3>
              <p className="text-gray-600 leading-relaxed">
                We value integrity, innovation, and excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

