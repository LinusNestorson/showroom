import React from "react";
import "./Footer.css";

/*Adds a footer at the end of the page. Contains links to extern pages*/
const Footer = () => {
  return <div className = 'footer'>
       
          <img className="linkedinImg" src="linkedIn.png" alt="LinkedIn" /> 
          <img className="github" src="github.png" alt="GitHub" />
          </div>;
};

export default Footer;
