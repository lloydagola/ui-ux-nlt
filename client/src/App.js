import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./css/styles.css";

import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Publications from "./Pages/Publications/index";

class App extends Component {
  componentDidMount() {
    console.log("mounting...");
  }
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/contacts"} component={Contacts} />
            <Route exact path={"/publications"} component={Publications} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
