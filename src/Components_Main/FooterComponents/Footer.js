import React from "react";
import "./Footer.css";

/*Adds a footer at the end of the page. Contains links to external pages*/
const Footer = () => {
  return <div className = 'footer'>
       
          <a href= 'http://linkedin.com' target='_blank' rel="noreferrer"> <img className="linkedinImg footer-col-1" src="linkedIn.png" alt="LinkedIn"/></a>
          <a href= 'http://github.com'  target='_blank' rel="noreferrer"> <img className="github footer-col-1" src="github.png" alt="GitHub" /></a>
            <div className="footer-col-2"></div>
            <div className = 'contactInfo footer-col-3'>
             <p>© Digital Showroom AB 2021 <br></br>📞 123-456789, Djursholm, Stockholm  </p>
            </div>
          </div>;
};

export default Footer;
