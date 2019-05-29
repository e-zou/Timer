import React from 'react';
import {Switch, Route} from "react-router-dom";
import Profile from './profile.js';


export default class MainPage extends React.Component {

    render () {
        return (
        <main>
            <Switch>
                <Route exact path='/' /* component={TimeRanges.js} *//>
                <Route exact path='/profile' component = {Profile}/>
            </Switch>
        </main>
            
        );
    }

}

/* <Route path="/">Main</Route>
             <Route path="/profile/">Profile</Route> */
