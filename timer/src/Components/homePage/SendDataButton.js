import React, { Component } from 'react';
import firebase from './../loginPage/fire.js';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


export default class SendDataButton extends Component {
        state = {
            user: this.props.user,
        }
    
        formatData = (e) => {
            e.preventDefault();
            if (this.props.user != null) { 
                var userId = firebase.auth().currentUser.uid;
                this.setState({
                    user: userId
                })
                for (let i = 0; i < this.props.times.length ; i++) {
                    const user = firebase.database().ref("users/" + userId);

                    let usertasks = {
                        task: this.props.tasks[i],
                        date: this.props.dates[i],
                        time: this.props.times[i],
                    }
                    user.push(usertasks)
                }
                console.log("Made new array");
            }
        }
    render() {
        console.log(this.state.user);
        if (this.state.user != null) { // if there is a user, send data
            return (
                <div>
                    <Button variant="outlined" onClick={this.formatData}>Save</Button>
                </div>
            );
        } else {
            return ( // if there is no user just display data
                <div>
                    <Button variant="outlined" title="Login to see all saved tasks">Save</Button>
                </div>
            );
        }
    }

}