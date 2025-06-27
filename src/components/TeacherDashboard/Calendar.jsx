import React from 'react';
import images from '../assets/images';

const Calendar = ({ schedules }) => {
  return (
    <div id="Calendar_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="Calendar_2" className="text-xl font-semibold mb-4">Class Schedule</h2>
      <div id="Calendar_3" className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} id={`Calendar_${index + 4}`} className="text-center font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div id="Calendar_11" className="space-y-2">
        {schedules?.map((schedule, index) => (
          <div key={index} id={`Calendar_${index + 12}`} className="p-2 bg-blue-100 rounded">
            <p className="font-medium">{schedule.className}</p>
            <p className="text-sm text-gray-600">{schedule.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;