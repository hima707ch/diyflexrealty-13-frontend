import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-lg transform -rotate-6"></div>
            <img src={images[1] || 'https://via.placeholder.com/500x400'} alt="About Us" className="relative rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-900">Our Mission in Books</h2>
            <p id="AboutUs_3" className="text-lg text-gray-600">We strive to provide the best curated content for our readers, fostering education and imagination.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_4" className="text-xl font-semibold text-blue-600">10000+</h3>
                <p id="AboutUs_5" className="text-gray-600">Books Available</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_6" className="text-xl font-semibold text-blue-600">500+</h3>
                <p id="AboutUs_7" className="text-gray-600">Happy Authors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;