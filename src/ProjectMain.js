import React from "react";
import ProjectBackground from "./Components_Projects/ProjectBackgroundComponents/ProjectBackground.js";
import "./ProjectMain.css";
import TextBox from "./Components_Main/TextboxComponents/Textbox.js";
import ContactButton from "./Components_Main/ContactButtonComponents/Contact_button.js";
import Navbar from "./Components_Main/NavbarComponents/Navbar.js";
import Footer from "./Components_Main/FooterComponents/Footer.js";

/* Function for generating components */
function ProjectMain() {
  return (
    <div className="projectMainBackground">
      <ProjectBackground />
      <Navbar />
    </div>
  );
}
export default ProjectMain;
