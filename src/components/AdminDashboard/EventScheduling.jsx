import React from 'react';
import images from '../assets/images';
import useEventScheduling from './useEventScheduling';

const EventScheduling = () => {
  const { events, loading, error, handleAddEvent, handleDeleteEvent } = useEventScheduling();

  if (loading) return <div id="EventScheduling_1" className="text-center">Loading...</div>;
  if (error) return <div id="EventScheduling_2" className="text-red-500">{error}</div>;

  return (
    <div id="EventScheduling_3">
      <div id="EventScheduling_4" className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Event Scheduling</h1>
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Schedule New Event
        </button>
      </div>
      <div id="EventScheduling_5" className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Date: {event.date}</p>
                    <p className="text-sm text-gray-500">Time: {event.time}</p>
                    <p className="text-sm text-gray-500">Location: {event.location}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventScheduling;