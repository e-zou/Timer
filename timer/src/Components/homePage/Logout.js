import React, {Component} from 'react';
import fire from '../loginPage/fire'
import Button from '@material-ui/core/Button';
import {Switch, Route} from "react-router-dom";
import Home from './home.js'

class Logout extends Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
        alert("you are logged out")
    }

    render(){
        return(
            <div>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}
export default Logout;