import React from 'react';
import images from '../assets/images';

const Header = () => {
  return (
    <header id="Header_1" className="bg-white shadow-md">
      <div id="Header_2" className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div id="Header_3" className="flex items-center">
          <img src={images[0]} alt="School Logo" className="h-10 w-10 mr-3" />
          <h1 id="Header_4" className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
        </div>
        <nav id="Header_5" className="flex items-center space-x-4">
          <button id="Header_6" className="text-gray-600 hover:text-gray-800">Profile</button>
          <button id="Header_7" className="text-gray-600 hover:text-gray-800">Settings</button>
          <button id="Header_8" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;