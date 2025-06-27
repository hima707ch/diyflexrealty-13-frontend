import React from 'react';
import images from '../assets/images';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'classes', label: 'Class Management', icon: '📚' },
    { id: 'events', label: 'Event Scheduling', icon: '📅' }
  ];

  return (
    <div id="Sidebar_1" className="w-64 bg-white shadow-lg">
      <div id="Sidebar_2" className="p-4 border-b">
        <img src={images[0]} alt="School Logo" className="h-12 mx-auto" />
        <h2 id="Sidebar_3" className="text-xl font-bold text-center mt-2">Admin Portal</h2>
      </div>
      <nav id="Sidebar_4" className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            id={`Sidebar_${item.id}`}
            className={`w-full p-4 text-left hover:bg-gray-100 flex items-center ${activeTab === item.id ? 'bg-blue-50 text-blue-600' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;