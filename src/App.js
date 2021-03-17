import React, { Component } from 'react'
import Header from './component/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App


