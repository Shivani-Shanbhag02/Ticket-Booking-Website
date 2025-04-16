import React from "react";


export default function Nav(props) { 
  return (
<> 
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <a className="navbar-brand fw-bold  " href="#home">🎭 BookMyShow</a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#shows">Shows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#booking">Book Now</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  );
}




