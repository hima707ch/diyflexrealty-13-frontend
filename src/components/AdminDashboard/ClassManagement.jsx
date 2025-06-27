import React from 'react';
import images from '../assets/images';
import useClassManagement from './useClassManagement';

const ClassManagement = () => {
  const { classes, loading, error, handleAddClass, handleDeleteClass } = useClassManagement();

  if (loading) return <div id="ClassManagement_1" className="text-center">Loading...</div>;
  if (error) return <div id="ClassManagement_2" className="text-red-500">{error}</div>;

  return (
    <div id="ClassManagement_3">
      <div id="ClassManagement_4" className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Class Management</h1>
        <button
          onClick={handleAddClass}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Class
        </button>
      </div>
      <div id="ClassManagement_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{classItem.students} students</span>
              <button
                onClick={() => handleDeleteClass(classItem.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassManagement;