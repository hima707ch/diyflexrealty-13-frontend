import React from 'react';
import images from '../assets/images';

const StudentTable = ({ students }) => {
  return (
    <div id="StudentTable_1" className="bg-white rounded-lg shadow overflow-hidden">
      <h2 id="StudentTable_2" className="text-xl font-semibold p-6">Student Information</h2>
      <div id="StudentTable_3" className="overflow-x-auto">
        <table id="StudentTable_4" className="w-full">
          <thead id="StudentTable_5" className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody id="StudentTable_6" className="divide-y divide-gray-200">
            {students?.map((student, index) => (
              <tr key={index} id={`StudentTable_${index + 7}`}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                  <button className="text-green-600 hover:text-green-800">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;