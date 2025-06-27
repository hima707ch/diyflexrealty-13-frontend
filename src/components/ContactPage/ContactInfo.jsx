import React from 'react';
import images from '../assets/images';

const ContactInfo = () => {
  return (
    <div id="ContactInfo_1" className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 id="ContactInfo_2" className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
      
      <div id="ContactInfo_3" className="space-y-4">
        <div id="ContactInfo_4" className="flex items-center">
          <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p id="ContactInfo_5" className="text-gray-600">123 Business Street, City, Country</p>
        </div>
        
        <div id="ContactInfo_6" className="flex items-center">
          <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p id="ContactInfo_7" className="text-gray-600">contact@example.com</p>
        </div>
        
        <div id="ContactInfo_8" className="flex items-center">
          <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p id="ContactInfo_9" className="text-gray-600">+1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;