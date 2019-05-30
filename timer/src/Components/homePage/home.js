import React from 'react';
import Timer from './Timer.js';
import Home2 from './Home2.js';
import TaskList from './TaskList.js';
import HasUserSet from './../loginPage/HasUserSet.js';

export default class Profile extends React.Component {

    state = {
        user : this.props.user
    }

    render () {
        // console.log(this.state.user);
        return (
        <div>
             <header>Home Page!</header>
              <Timer />
              <TaskList user={this.state.user}/>
              <Home2 />
        </div>
           
        );
    }

}