import React from "react";
import Navbar from "./Components_Main/NavbarComponents/Navbar.js";
import Main from "./Main.js";
import ProjectMain from "./ProjectMain.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ProjectMain">
          <ProjectMain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
