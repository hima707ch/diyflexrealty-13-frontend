import React from 'react';
import images from '../assets/images';

const GradesOverview = ({ grades = [] }) => {
  const calculateAverage = () => {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade.score, 0);
    return (sum / grades.length).toFixed(1);
  };

  return (
    <div id="GradesOverview_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="GradesOverview_2" className="text-xl font-semibold mb-4">Grades Overview</h2>
      <div id="GradesOverview_3" className="mb-4">
        <p className="text-gray-600">Overall Average:</p>
        <p className="text-3xl font-bold text-blue-600">{calculateAverage()}%</p>
      </div>
      <div id="GradesOverview_4" className="space-y-3">
        {grades.map((grade, index) => (
          <div key={index} id={`GradesOverview_5_${index}`} className="flex justify-between items-center">
            <span className="text-gray-700">{grade.subject}</span>
            <span className={`font-medium ${grade.score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
              {grade.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesOverview;