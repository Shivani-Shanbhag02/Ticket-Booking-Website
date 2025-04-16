
import React, { useState } from 'react';
import Nav from './components/Nav'; // Make sure this import is correct
import Events from './components/Events';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import './App.css';

// Log the Nav component to check if it's imported correctly

function App() {
  const [activeTab, setActiveTab] = useState('events');
  const [activeEvent, setActiveEvent] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleBookingSuccess = (bookingData) => {
    setBooking(bookingData);
    setActiveTab('confirmation');
  };

  const handleBackToEvents = () => {
    setActiveTab('events');
    setActiveEvent(null);
    setBooking(null);
  };

  return (
   
<>
    <div className="app">
      <Nav />
      <Herosection />
      <main className="content">
        {activeTab === 'events' && !activeEvent && (
          <Events setActiveEvent={setActiveEvent} />
        )}
        
        {activeTab === 'events' && activeEvent && (
          <Booking 
            event={activeEvent} 
            onBookingSuccess={handleBookingSuccess}
            onCancel={() => setActiveEvent(null)}
          />
        )}
        
        {activeTab === 'confirmation' && booking && (
          <Confirmation 
            booking={booking} 
            onBackToEvents={handleBackToEvents}
          />
        )}
      </main>
      <Footer />
    </div>
</>
    
  );
}

export default App;