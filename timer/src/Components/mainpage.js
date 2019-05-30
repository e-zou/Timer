import React from 'react';
import {Switch, Route} from "react-router-dom";
import Profile from './profilePage/profile.js';
import Home from './homePage/home.js';
import SignupPage from './loginPage/SignupPage.js';

export default class MainPage extends React.Component {
    render () {
        return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/profile' component = {Profile}/>
                <Route exact path='/login' component = {SignupPage}/>
            </Switch>
        </main>
            
        );
    }

}

/* <Route path="/">Main</Route>
             <Route path="/profile/">Profile</Route> */
