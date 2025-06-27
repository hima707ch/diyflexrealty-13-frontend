import React from 'react';
import images from '../assets/images';

const AssignmentsList = ({ assignments = [] }) => {
  return (
    <div id="AssignmentsList_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="AssignmentsList_2" className="text-xl font-semibold mb-4">Assignments</h2>
      <div id="AssignmentsList_3" className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} id={`AssignmentsList_4_${index}`} className="border-b pb-3">
            <h3 className="font-medium text-gray-800">{assignment.title}</h3>
            <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className={`px-2 py-1 rounded text-sm ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {assignment.status}
              </span>
              <button className="text-blue-500 hover:text-blue-700 text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsList;