import React from "react";
import "./Footer.css";

/*Adds a footer at the end of the page. Contains links to extern pages*/
const Footer = () => {
  return <div className = 'footer'>
       
          <a href= 'http://linkedin.com' target='_blank' rel="noreferrer"> <img className="linkedinImg" src="linkedIn.png" alt="LinkedIn"/></a>
          <a href= 'http://github.com'  target='_blank' rel="noreferrer"> <img className="github" src="github.png" alt="GitHub" /></a>
          </div>;
};

export default Footer;
