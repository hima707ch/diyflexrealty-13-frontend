import React from 'react';
import images from '../assets/images';
import AssignmentsList from './AssignmentsList';
import GradesOverview from './GradesOverview';
import UpcomingEvents from './UpcomingEvents';
import { useStudentDashboard } from './useStudentDashboard';

const Body = () => {
  const { studentData, loading, error } = useStudentDashboard();

  if (loading) return (
    <div id="Body_1" className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>
  );

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <header id="Body_4" className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-600">Welcome back, {studentData?.name}</p>
      </header>
      
      <div id="Body_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AssignmentsList assignments={studentData?.assignments} />
        <GradesOverview grades={studentData?.grades} />
        <UpcomingEvents events={studentData?.events} />
      </div>
    </div>
  );
};

export default Body;