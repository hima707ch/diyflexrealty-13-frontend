import React from 'react';
import UserManagement from './UserManagement';
import ClassManagement from './ClassManagement';
import EventScheduling from './EventScheduling';
import Sidebar from './Sidebar';
import useAdminDashboard from './useAdminDashboard';
import images from '../assets/images';

const Body = () => {
  const { activeTab, setActiveTab } = useAdminDashboard();

  const renderContent = () => {
    switch(activeTab) {
      case 'users':
        return <UserManagement />;
      case 'classes':
        return <ClassManagement />;
      case 'events':
        return <EventScheduling />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div id="Body_1" className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div id="Body_2" className="flex-1 overflow-auto p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Body;