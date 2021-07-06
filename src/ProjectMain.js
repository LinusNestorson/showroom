import React from "react";
import "./ProjectMain.css";

/* Function for generating components */
function ProjectMain() {
  return (
    <div className="mainContainer">
      <div className="firstProject">
        <a
          href="https://giraffefansite.wordpress.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="projectText">Giraffe Sanctuary</p>
          <img
            className="giraffeImg"
            src="giraffeLarge.png"
            alt="Screenshot of giraffe"
          ></img>
        </a>
      </div>
      <div className="secondProject">
        <a
          href="https://84miklar3611.wordpress.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="projectText">Yoga Pants project</p>
          <img
            className="yogaImg"
            src="yoga3.png"
            alt="Screenshot of yoga"
          ></img>
        </a>
      </div>
      <div className="thirdProject">Third</div>
    </div>
  );
}
export default ProjectMain;
