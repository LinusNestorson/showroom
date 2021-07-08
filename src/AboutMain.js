import React from "react";
import "./AboutMain.css";
import "./ProjectMain.css";
import { render } from "react-dom";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";

/* Contains things for about page */
function AboutMain() {
  return (
    <div className="aboutContainter">
      <div className="pictureContainer">
        <img src="human.png" alt="Beautiful Forest"></img>
      </div>
      <div className="textContainer">
        <h2 className="headerStyle">About Anna</h2>
        <p className="textStyle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="./CV.pdf" target="_blank" download>
          <button className="contactButton">Download CV</button>
        </Link>
      </div>
    </div>
  );
}
export default AboutMain;
