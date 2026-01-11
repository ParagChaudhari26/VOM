import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="cursor-pointer">
                <h1 className="text-2xl font-serif text-orange-600 font-bold">VIYOM</h1>
                <p className="text-xs text-blue-800">Transparent Donations</p>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'text-blue-800 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/dashboard' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'text-blue-800 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  My Dashboard
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/donate"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
              >
                Donate Now
              </Link>
              
              {/* Mobile menu button */}
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
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible max-h-96' 
              : 'opacity-0 invisible max-h-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-orange-200">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'text-blue-800 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/dashboard' 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'text-blue-800 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                My Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header

