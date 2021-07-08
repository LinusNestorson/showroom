import React from "react";
import Navbar from "./Components_Main/NavbarComponents/Navbar.js";
import Main from "./Main.js";
import ProjectMain from "./ProjectMain.js";
import AboutMain from "./AboutMain.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components_Main/FooterComponents/Footer.js";
/* Main app function for rendering */
function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/AboutMain">
          <AboutMain />
        </Route>
        <Route path="/ProjectMain">
          <ProjectMain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
