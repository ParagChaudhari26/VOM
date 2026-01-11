import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-serif mb-4">VIYOM</h3>
            <p className="text-blue-200 text-sm">
              Transparent donation platform for Siddhagiri Math and spiritual organizations. Your contributions make a real difference.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-blue-200 hover:text-white">Donate Now</Link>
              </li>
              <li>
                <Link to="/donations" className="text-blue-200 hover:text-white">Track Donations</Link>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">About Us</a>
              </li>
            </ul>
          </div>

          {/* OUR CAUSES */}
          <div>
            <h4 className="font-medium mb-4">Our Causes</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-blue-200">Gaushala Care</span></li>
              <li><span className="text-blue-200">Education Support</span></li>
              <li><span className="text-blue-200">Healthcare Services</span></li>
              <li><span className="text-blue-200">Women Empowerment</span></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>📞 +91 12345 67890</li>
              <li>📧 donate@viyom.org</li>
              <li>📍 Siddhagiri Math, Maharashtra</li>
              <li>🌐 www.siddhagirimatham.org</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© 2024 VIYOM - Siddhagiri Math. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">80G Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
