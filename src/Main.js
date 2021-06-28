import React from "react";
import Background from './Components_Main/Background.js'
import './Main.css'
import TextBox from './Components_Main/Textbox.js'


function Main() {
   return (
   <div className="mainBackground">
       <Background />
       <TextBox />
   </div>
   )


}
export default Main;