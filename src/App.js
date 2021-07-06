import React from 'react'
import Navbar from './Components_Main/NavbarComponents/Navbar.js'
import Main from './Main.js'
import ProjectMain from './ProjectMain.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="appBackground">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/ProjectMain">
                    <ProjectMain />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default App;