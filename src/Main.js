import React from "react";
import Background from './Components_Main/BackgroundComponents/Background.js'
import './Main.css'
import TextBox from './Components_Main/TextboxComponents/Textbox.js'
import ContactButton from "./Components_Main/ContactButtonComponents/Contact_button.js";
import Navbar from "./Components_Main/NavbarComponents/Navbar.js";


function Main() {
   return (
   <div className="mainBackground">
       <Background />
       <TextBox />
       <ContactButton />
       <Navbar />
   </div>
   )


}
export default Main;