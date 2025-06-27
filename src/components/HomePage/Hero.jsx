import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-51.1C52.9,-42.1,57.2,-26.7,58.4,-11.8C59.6,3.1,57.8,17.4,50.5,28.5C43.2,39.6,30.5,47.4,16.3,52.6C2.1,57.8,-13.5,60.4,-27.2,55.9C-40.9,51.4,-52.7,39.8,-57.4,26.1C-62.1,12.4,-59.7,-3.4,-53.6,-16.6C-47.5,-29.8,-37.7,-40.4,-26.2,-48.7C-14.7,-57,-2.5,-63,11.1,-61.8C24.7,-60.6,32.5,-60.1,42.7,-51.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Transforming Education</span>
              <span className="block animate-slide-up">Together</span>
            </h1>
            <p id="Hero_3" className="text-xl text-blue-100">Empowering students with innovative learning solutions and personalized education paths.</p>
            <button id="Hero_4" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started</button>
          </div>
          <div className="relative animate-float">
            <img src={images[0] || 'https://via.placeholder.com/600x400'} alt="Education" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};;

export default Hero;