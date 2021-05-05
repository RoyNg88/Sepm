import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import 'semantic-ui-css/semantic.min.css';

import Commentt from "./components/Comment/Comment";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Commentt } />
        </Switch>
      
      </React.Fragment>
    );
}

export default App;
