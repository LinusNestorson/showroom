import React from "react";
import Background from "./Components_Main/BackgroundComponents/Background.js";
import "./Main.css";
import TextBox from "./Components_Main/TextboxComponents/Textbox.js";
import ContactButton from "./Components_Main/ContactButtonComponents/Contact_button.js";
import Navbar from "./Components_Main/NavbarComponents/Navbar.js";
import Footer from "./Components_Main/FooterComponents/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SendMail from "./Components_Main/SendEmail/SendEmail.js";

/* Function for generating components */
function Main() {
  return (
    <div className="mainBackground">
      <Background />
      <TextBox />
      <SendMail />
    </div>
  );
}
export default Main;
