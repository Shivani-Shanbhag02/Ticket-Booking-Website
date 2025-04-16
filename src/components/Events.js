import React, { useState, useEffect } from 'react';
import eventsData from '../data/events.js';

const Events = ({ setActiveEvent }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData); // No API, just static data
  }, []);

  return (
    <section className="events-section">
      <h2 classNmae='headhead'>Upcoming Events</h2>
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img 
                src={event.image} 
                alt={event.name} 
                style={{ width: '100%', maxWidth: '400px', borderRadius: '5px' }} 
              />
            </div>
            <div className="event-details">
              <h3>{event.name}</h3>
              <p className="event-date">📅 {new Date(event.date).toDateString()}</p>
              <p className="event-price">💰 ₹{event.price}</p>
              <p className="event-seats">{event.seats} seats available</p>
              <button className="book-btn" onClick={() => setActiveEvent(event)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
