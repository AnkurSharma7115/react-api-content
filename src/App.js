import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from './component/SideNav/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       images : []
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response => response.json())
    .then(data => {
      this.setState(prevState =>({
        images : prevState.images=data
      }))
    })

  }
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route  path="/" render={() => <Home images={this.state.images}/>}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App


