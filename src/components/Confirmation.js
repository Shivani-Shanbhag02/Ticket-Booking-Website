import React from 'react';

const Confirmation = ({ booking, onBackToEvents }) => (
  <div className="container my-5">
    <div className="card p-4 shadow">
      <h2 className="text-success">🎉 Booking Confirmed!</h2>
      <p>Thank you, <strong>{booking.name}</strong>!</p>
      <p>You booked <strong>{booking.ticketsBooked}</strong> ticket(s) for <strong>{booking.event.name}</strong>.</p>
      <p>Total: <strong>₹{booking.event.price * booking.ticketsBooked}</strong></p>
      <p>Confirmation sent to: <strong>{booking.email}</strong></p>
      <button className="btn btn-primary mt-3" onClick={onBackToEvents}>Back to Events</button>
    </div>
  </div>
);

export default Confirmation;