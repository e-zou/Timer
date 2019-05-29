import React from 'react';
import Timer from './Timer.js';
import Home2 from './Home2.js';
import TaskList from './TaskList.js';

export default class Profile extends React.Component {


    render () {
        return (
        
        <div>
             <header>Home Page!</header>
              <Timer />
              <TaskList />
              <Home2 />
        </div>
           
        );
    }

}