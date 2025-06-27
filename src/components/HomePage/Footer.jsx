import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 id="Footer_2" className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">Transforming education through innovative learning solutions and personalized education paths.</p>
          </div>
          <div>
            <h3 id="Footer_3" className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Programs</a></li>
              <li><a href="#" className="hover:text-white transition">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition">Campus Life</a></li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_4" className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@school.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Education St</li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_5" className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2023 Education Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;