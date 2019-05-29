import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Tasks from './callfirebase'
import Taskpage from './taskpage'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

function App() {
  return (
    //<Router>
      <div className="App">
        <Tasks />
        {/*<Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={SignUp} />*/}
      </div>
    //</Router>
  );
}

export default App;
