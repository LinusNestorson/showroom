import React from "react";
import "./ProjectMain.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

/* Function for generating components */
function ProjectMain() {
  return (
    <div className="mainContainer">
      <div className="project">
        <a
          href="https://giraffefansite.wordpress.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="projectText">Giraffe Sanctuary</p>
          <button className="projectButton">View</button>
          <img
            className="giraffeImg"
            src="giraffe5.png"
            alt="Screenshot of giraffe"
          ></img>
        </a>
      </div>

      <div className="project">
        <p className="projectText">Yoga Pants project</p>
        <Link
          className="projectButton"
          to={{
            pathname: "https://84miklar3611.wordpress.com/",
          }}
          target="_blank"
        >
          View
        </Link>

        <div className="techniques">
          <Popup
            contentStyle={{ fontFamily: "Cinzel" }}
            trigger={<button className="techniqueButton">Techniques</button>}
            position="center"
          >
            <p className="popupText">
              <ul>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </p>
          </Popup>
        </div>
        <img className="yogaImg" src="yoga2.png" alt="Screenshot of yoga"></img>
      </div>

      <div className="project">
        <p className="projectText">Burger Boonanza</p>

        <Link
          className="projectButton"
          to={{
            pathname: "https://84miklar3611956072049.wordpress.com/",
          }}
          target="_blank"
        >
          View
        </Link>

        <div className="techniques">
          <Popup
            contentStyle={{ fontFamily: "Cinzel" }}
            trigger={<button className="techniqueButton">Techniques</button>}
            position="center"
          >
            <p className="popupText">
              <ul>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </p>
          </Popup>
        </div>
        <img className="burgerImg" src="burger2.png" alt="juicy burger"></img>
      </div>
    </div>
  );
}

export default ProjectMain;
/*https://giraffefansite.wordpress.com/*/
