import React, { Component } from 'react';
import firebase from './../loginPage/fire.js';
import Button from '@material-ui/core/Button';


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
                    <Button onClick={this.props.formatData}>Done</Button>
                </div>
            );
        } else {
            return ( // if there is no user just display data
                <div>
                    <Button title="Login to see all completed tasks">Save</Button>
                </div>
            );
        }
    }

}