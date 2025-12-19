import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1A368A] text-white py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: VIYOM */}
          <div>
            <h3 className="text-2xl font-bold mb-4">VIYOM</h3>
            <p className="text-white/90 leading-relaxed">
              Transparent donation platform for Siddhagiri Math and spiritual organizations. Your contributions make a real difference.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="list-none space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#donate" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Donate Now
                </a>
              </li>
              <li>
                <a href="#track" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Track Donations
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Our Causes */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Causes</h4>
            <ul className="list-none space-y-2">
              <li>
                <a href="#gaushala" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Gaushala Care
                </a>
              </li>
              <li>
                <a href="#education" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Education Support
                </a>
              </li>
              <li>
                <a href="#healthcare" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Healthcare Services
                </a>
              </li>
              <li>
                <a href="#women" className="text-white/80 hover:text-white transition-colors duration-300 no-underline">
                  Women Empowerment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-xl">📞</span>
                <span className="text-white/80">+91 12345 67890</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📧</span>
                <span className="text-white/80">donate@viyom.org</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-white/80">Siddhagiri Math, Maharashtra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🌐</span>
                <span className="text-white/80">www.siddhagirimatham.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
            <p>&copy; 2024 VIYOM - Siddhagiri Math. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#certificate" className="hover:text-white transition-colors duration-300">80G Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

