import React from 'react';
import images from '../assets/images';

const Mission = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50" id="Mission_1">
      <div className="container mx-auto px-4" id="Mission_2">
        <div className="text-center mb-12" id="Mission_3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4" id="Mission_4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" id="Mission_5">
            {data.statement}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8" id="Mission_6">
          {data.objectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md" id={`Mission_7_${index}`}>
              <div className="text-blue-600 mb-4" id={`Mission_8_${index}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={objective.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" id={`Mission_9_${index}`}>{objective.title}</h3>
              <p className="text-gray-600" id={`Mission_10_${index}`}>{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;