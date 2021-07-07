import React from "react";
import "./AboutMain.css";
import "./ProjectMain.css";
import { render } from "react-dom";
import { LoremIpsum } from "react-lorem-ipsum";

function AboutMain() {
  return (
    <div className="aboutContainter">
      <div className="pictureContainer">
        <img src="forest.jpg" alt="Beautiful Forest"></img>
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
      </div>
    </div>
  );
}
export default AboutMain;
