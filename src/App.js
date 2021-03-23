import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/SideNav/Home";
import About from "./component/About";
import Contact from "./component/Contact";

class App extends Component {
  render() {
      return (
          <div className="App">
              <Router>
                  <Header />
                  <Switch>
                      <Route path="/contact" component={Contact}></Route>
                      <Route path="/about" component={About}></Route>
                      <Route path="/home"  component ={Home}></Route>
                     <Redirect to="/home" />
                  </Switch>
              </Router>
          </div>
      );
  }
}

export default App;
