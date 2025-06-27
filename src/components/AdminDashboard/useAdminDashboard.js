import { useState } from 'react';

const useAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return {
    activeTab,
    setActiveTab
  };
};

export default useAdminDashboard;