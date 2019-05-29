import React from 'react';
import './App.css';
import MainPage from './Components/mainpage.js';
import Header from './Components/header.js';
import Button from '@material-ui/core/Button';

//This app uses react-router to create and navigate between multiple pages
//This tutorial is helpful for understanding this: https://blog.pshrmn.com/simple-react-router-v4-tutorial/
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Header/>
        <MainPage />
    
      
    </div>
    </BrowserRouter>
  );
}

export default App;
