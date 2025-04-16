import React from "react";


export default function Footer() { 
  return (
   <>
       <footer className="bg-dark text-white text-center text-lg-start mt-5">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">🎭 BookMyShow</h5>
        <p>
           <br /><strong className="ms-3">Book your seats, grab your popcorn.</strong>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled mb-0">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#shows" className="text-white">Shows</a></li>
          <li><a href="#booking" className="text-white">Book Now</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>
        <ul className="list-unstyled mb-0">
          <li><span className="text-white">📧 BookMyShow@gmail.com</span></li>
          <li><span className="text-white">📞 +91 98765 43210</span></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © {new Date().getFullYear()} BookMyShow. All rights reserved.
  </div>
</footer>

   </>
  );
}
