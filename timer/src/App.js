
import React, {Component} from 'react';
import './App.css';
import MainPage from './Components/mainpage.js';
import Header from './Components/header.js';
import Button from '@material-ui/core/Button';
import SignupPage from './Components/loginPage/SignupPage'

//This app uses react-router to create and navigate between multiple pages
//This tutorial is helpful for understanding this: https://blog.pshrmn.com/simple-react-router-v4-tutorial/
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Header/>
        <MainPage />

        {/* <SignupPage/> */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
