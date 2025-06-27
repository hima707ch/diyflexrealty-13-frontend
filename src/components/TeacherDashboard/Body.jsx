import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import StudentTable from './StudentTable';
import Announcements from './Announcements';
import { useTeacherDashboard } from './useTeacherDashboard';
import images from '../assets/images';

const Body = () => {
  const { schedules, students, announcements, loading, error } = useTeacherDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100">
      <Header />
      <div id="Body_4" className="container mx-auto px-4 py-8">
        <div id="Body_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div id="Body_6" className="col-span-1 md:col-span-2 lg:col-span-2">
            <Calendar schedules={schedules} />
          </div>
          <div id="Body_7" className="col-span-1">
            <Announcements announcements={announcements} />
          </div>
          <div id="Body_8" className="col-span-1 md:col-span-2 lg:col-span-3">
            <StudentTable students={students} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;