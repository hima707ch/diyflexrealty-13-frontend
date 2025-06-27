import React from 'react';
import images from '../assets/images';

const UpcomingEvents = ({ events = [] }) => {
  return (
    <div id="UpcomingEvents_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="UpcomingEvents_2" className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <div id="UpcomingEvents_3" className="space-y-4">
        {events.map((event, index) => (
          <div key={index} id={`UpcomingEvents_4_${index}`} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 text-center">
              <p className="text-sm font-bold text-blue-600">{event.date}</p>
              <p className="text-xs text-gray-500">{event.month}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.time}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;