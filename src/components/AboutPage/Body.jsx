import React from 'react';
import History from './History';
import Mission from './Mission';
import Values from './Values';
import images from '../assets/images';
import { useAbout } from './useAbout';

const Body = () => {
  const { historyData, missionData, valuesData } = useAbout();

  return (
    <div className="container mx-auto px-4 py-8" id="Body_1">
      <div className="text-center mb-12" id="Body_2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4" id="Body_3">About Our Book Store</h1>
        <p className="text-lg text-gray-600" id="Body_4">Delivering knowledge and joy through books since 1992</p>
      </div>
      
      <History data={historyData} />
      <Mission data={missionData} />
      <Values data={valuesData} />
    </div>
  );
};

export default Body;