import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/aboutpage' },
    { name: 'Contact', route: '/contactpage' },
    { name: 'Student Dashboard', route: '/studentdashboard' },
    { name: 'Teacher Dashboard', route: '/teacherdashboard' },
    { name: 'Admin Dashboard', route: '/admindashboard' }
  ];

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center space-x-4">
            <img src={images[0]} alt="School Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EduTech</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                id={`Header_${index + 3}`}
                className={`text-lg transition-all duration-300 hover:text-blue-600 ${location.pathname === link.route ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <div id="Header_9" className="flex items-center space-x-4">
              <Link
                to="/loginpage"
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Register
              </Link>
            </div>
          </div>

          <button
            id="Header_10"
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_11" className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className={`block py-2 text-lg ${location.pathname === link.route ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link
                to="/loginpage"
                className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;