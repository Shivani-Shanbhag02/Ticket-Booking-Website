import React, { useState } from 'react';
      
      const Booking = ({ event, onBookingSuccess, onCancel }) => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          tickets: 1
        });
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const result = {
            name: formData.name,
            email: formData.email,
            ticketsBooked: Number(formData.tickets),
            event
          };
          onBookingSuccess(result);
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
        };
      
        return (
          <section className="booking-section">
            <h2>Booking for: {event.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
      
              <div className="mb-3">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
      
              <div className="mb-3">
                <label>Tickets:</label>
                <input
                  type="number"
                  name="tickets"
                  className="form-control"
                  min="1"
                  max={event.seats}
                  value={formData.tickets}
                  onChange={handleChange}
                  required
                />
              </div>
      
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Confirm Booking
                </button>
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </section>
        );
      };
      
      export default Booking;







