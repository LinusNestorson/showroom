import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/* Function for the main navbar */
function Navbar() {
  return (
    <div className="navbar">
      <p className="name col-1">A.Olsson</p>
      <div className='col-2'></div>
      <Link to="/" className="buttons col-3"><div className="navButtons col-3">Home</div></Link>
      <Link to="About" className="buttons col-4"><div className="navButtons col-4">About</div></Link>
      <Link to="ProjectMain" className="buttons col-5"><div className="navButtons col-5">Projects</div></Link>
    </div>
  );
}

export default Navbar;
