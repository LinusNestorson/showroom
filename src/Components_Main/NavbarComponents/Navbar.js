import React from "react";
import "./Navbar.css";
/* Function for the main navbar */
function Navbar() {
  return (
    <nav className="navbar">
      <p className="name col-1">A.Olsson</p>
        <div className='col-2'></div>
        <button className="buttons col-3">Home</button>
        <button className="buttons col-4">About</button>
        <button className="buttons col-5">Projects</button>
      
    </nav>
  );
}

export default Navbar;
