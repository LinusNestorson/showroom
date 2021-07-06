import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/* Function for the main navbar */
function Navbar() {
  return (
    <div className="navbar">
      <p className="name col-1">A.Olsson</p>
      <div className='col-2'></div>
      <Link to="/" ><div className="buttons col-3">Home</div></Link>
      <button className="buttons col-4">About</button>
      <Link to="ProjectMain"><div className="buttons">Projects</div></Link>
    </div>
  );
}

export default Navbar;
