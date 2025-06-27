import React from 'react';
import images from '../assets/images';

const Announcements = ({ announcements }) => {
  return (
    <div id="Announcements_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="Announcements_2" className="text-xl font-semibold mb-4">Announcements</h2>
      <div id="Announcements_3" className="space-y-4">
        {announcements?.map((announcement, index) => (
          <div key={index} id={`Announcements_${index + 4}`} className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">{announcement.title}</h3>
            <p className="text-sm text-gray-600">{announcement.content}</p>
            <span className="text-xs text-gray-400">{announcement.date}</span>
          </div>
        ))}
      </div>
      <button id="Announcements_8" className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        New Announcement
      </button>
    </div>
  );
};

export default Announcements;