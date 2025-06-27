import React from 'react';
import images from '../assets/images';

const Values = ({ data }) => {
  return (
    <section className="py-16" id="Values_1">
      <div className="container mx-auto px-4" id="Values_2">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12" id="Values_3">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="Values_4">
          {data.values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" id={`Values_5_${index}`}>
              <img src={images[index % images.length]} alt={value.title} className="w-16 h-16 mb-4 mx-auto" id={`Values_6_${index}`} />
              <h3 className="text-xl font-semibold text-center mb-4" id={`Values_7_${index}`}>{value.title}</h3>
              <p className="text-gray-600 text-center" id={`Values_8_${index}`}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;