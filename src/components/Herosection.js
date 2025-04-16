import React from "react";


export default function Herosection(props) { 
  return (
 <>
      <section
  className="text-white text-center d-flex align-items-center justify-content-center"
  style={{
    minHeight: '90vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'relative',
  }}
>
  
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 1,
    }}
  ></div>

  <div className="container" style={{ zIndex: 2 }}>
    <h1 className="display-4 fw-bold mb-4">Welcome to the BookMyShow 🎭</h1>
    <p className="lead mb-5">
      Book your favorite shows, reserve your seats, and experience drama like never before! 🎬✨
    </p>
    <a href="#booking" className="btn btn-danger btn-lg px-5 py-3">
      Book Tickets Now 
    </a>
  </div>
</section>

 </>
  );
}




