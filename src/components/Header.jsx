import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="logo">
            <h2 className="text-2xl font-bold text-orange-500 m-0">VIYOM</h2>
            <p className="text-sm text-gray-500 m-0">Transparent Donations</p>
          </Link>
          <div className="flex items-center gap-6">
            <nav className={`md:flex md:items-center md:gap-6 md:static md:bg-transparent md:shadow-none md:opacity-100 md:visible md:transform-none absolute top-full left-0 right-0 bg-white flex-col p-4 shadow-lg transition-all duration-300 ${
              isMenuOpen 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible -translate-y-full md:translate-y-0'
            }`}>
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 py-2 md:py-0 ${
                  location.pathname === '/' 
                    ? 'bg-orange-100 text-orange-500' 
                    : 'text-gray-600 hover:bg-orange-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/donations" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors duration-300 py-2 md:py-0 ${
                  location.pathname === '/donations' 
                    ? 'text-blue-700 font-semibold' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                My Donations
              </Link>
              <Link 
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="md:hidden bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 w-full mt-2 text-center"
              >
                Donate Now
              </Link>
            </nav>
            <Link 
              to="/donate"
              className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Donate Now
            </Link>
            <button 
              className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

