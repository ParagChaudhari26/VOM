import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <section className="py-20 bg-[#1A368A] text-white">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Our Mission of Service
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
          Every donation is tracked transparently and goes directly to the cause you choose. Together, we can build a better tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/donate"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 inline-block text-center"
          >
            Start Donating Today
          </Link>
          <Link 
            to="/donations"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block text-center"
          >
            My Donations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Mission

