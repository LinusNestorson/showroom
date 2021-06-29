import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="name">A.Olsson</p>
      <div className="navButtons">
        <button className="buttons">Home</button>
        <button className="buttons">About</button>
        <button className="buttons">Projects</button>
      </div>
    </nav>
  );
}

export default Navbar;
