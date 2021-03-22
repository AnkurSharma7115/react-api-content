import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from './component/SideNav/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       images : [],
       reelImages :[]
    }
  }
  componentDidMount(){
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos"),
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=5")
    ])
    .then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    })
    .then(([res1, res2]) => {
      this.setState({
        images: res1,
        reelImages: res2,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  }
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" render={() => <Home  image={this.state}/>}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App


