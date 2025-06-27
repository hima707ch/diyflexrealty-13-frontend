import React from 'react';
import images from '../assets/images';

const CTA = ({ onSubmit }) => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="CTA_2" className="text-3xl font-bold text-white mb-8">Ready to Start Your Learning Journey?</h2>
          <form id="CTA_3" onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started Now
            </button>
          </form>
          <p id="CTA_4" className="mt-6 text-blue-100">Join thousands of students already learning with us</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;