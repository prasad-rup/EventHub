// MyEvents.js
import React from 'react';
import './MyEvents.css';

const MyEvents = () => {
  // Sample event data (replace this with actual data from your API)
  const registeredEvents = [
    {
      id: 1,
      eventName: 'Event 1',
      date: '2024-01-30T18:00:00Z',
    },
    // Add more event data as needed
  ];

  const handleCancelRegistration = (eventId) => {
    // Handle cancel registration logic here
    console.log(`Cancel registration for Event ID: ${eventId}`);
  };

  return (
    <div className="my-events-container">
      <h2>My Events</h2>
      {registeredEvents.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-details">
            <h3>{event.eventName}</h3>
            <p>{new Date(event.date).toLocaleString()}</p>
          </div>
          <button onClick={() => handleCancelRegistration(event.id)} className="cancel-button">
            Cancel Registration
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyEvents;
