import React, { Component } from 'react';
import firebase from './../loginPage/fire.js';


export default class SendDataButton extends Component {
        state = {
            user: '',
            sent: false,
        }
        // if user is not null, put in a button with a function that will send in data.
        // else do nothing
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

                // at index checks is true, get data about date, time, and task at that index
                // put them all in seperate arrays
    
                // merge arrays task : {date: , time: }
                // 

            }
        }
    render() {
        console.log(this.state.user);
        return (
            <div>
                <button onClick={this.formatData}>Send Data</button>
            </div>
        );
    }

}