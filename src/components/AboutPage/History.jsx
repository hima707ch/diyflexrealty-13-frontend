import React from 'react';
import images from '../assets/images';

const History = ({ data }) => {
  return (
    <section className="mb-16" id="History_1">
      <div className="grid md:grid-cols-2 gap-8 items-center" id="History_2">
        <div className="space-y-6" id="History_3">
          <h2 className="text-3xl font-semibold text-gray-800" id="History_4">Our History</h2>
          <p className="text-gray-600 leading-relaxed" id="History_5">
            Founded in 1990, our institution has grown from a small local school to a leading educational establishment. Through decades of dedication to academic excellence and student development, we have consistently evolved to meet the changing needs of education.
          </p>
          <div className="space-y-4" id="History_6">
            {data.milestones.map((milestone, index) => (
              <div key={index} className="flex items-start" id={`History_7_${index}`}>
                <span className="text-blue-600 font-bold mr-4">{milestone.year}</span>
                <p className="text-gray-700">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative" id="History_8">
          <img src={images[0]} alt="School History" className="rounded-lg shadow-xl w-full h-auto" id="History_9" />
        </div>
      </div>
    </section>
  );
};

export default History;