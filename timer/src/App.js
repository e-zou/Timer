import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home2 from './Home2'
import Login from './Login'
import fire from './fire.js';
import SignupPage from './SignupPage'

class App extends Component{  
  render(){
    return(
      <div className="App">
        <SignupPage/>
      </div>
    )
  }
}

export default App;
