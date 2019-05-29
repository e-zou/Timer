import React from 'react';
import './App.css';
import MainPage from './Components/mainpage.js';
import Header from './Components/header.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header/>
        <MainPage />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
