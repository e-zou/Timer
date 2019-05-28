import React, { Components } from 'react';
import moment from "moment";

export default class Timer extends React.Component {
    state = {
        // unused variables
        timeStarted: false,
        timeStopped: true,
        // hidden variables
        totalSeconds: 1500, // total time elapsed in seconds
        timer: 0, // used to set and clear intervals
        // time variables
        minutes : 25,
        seconds : 0,
        // displayed variables
        minutes1 : '25',
        seconds1 : '00'
    }

    formatTime = (seconds) => { // converts into proper minutes and seconds
        let min = Math.floor(this.state.totalSeconds / 60); 
        let sec = this.state.totalSeconds % 60;
        this.setState({
            minutes : min,
            seconds : sec,
            minutes1 : ("0" + min).slice(-2),
            seconds1 : ("0" + sec).slice(-2),
        })
    }

    tick = () => { // countdown
        this.setState({ // decrease count 
            totalSeconds : this.state.totalSeconds - 1
        })
        this.formatTime(this.state.totalSeconds); // formats time 
        if(this.state.totalSeconds == 0) { // clears timer when no more to decrease
            clearInterval(this.state.timer);
        }
    }

    startTimer = (e) => { // start timer
        e.preventDefault();
        console.log(this.state.timer);
        console.log(this.state.totalSeconds);
        if(this.state.totalSeconds > 0) {
            this.state.timer = setInterval(this.tick, 1000); // timer is a function used to set variables every 1 second
        }
        console.log("Timer countdown");
    }

    stopTimer = (e) => { // stops timer
        e.preventDefault();
        clearInterval(this.state.timer); // stops the timer function from running
        console.log("Timer stop");
        // console.log(this.state.minutes1);
        // console.log(this.state.seconds1);
        this.setState({
            timeStarted: true,
            timeStopped: false,
        });
    }

    resetTimer = (e) => { // resets timer
        e.preventDefault();
        clearInterval(this.state.timer); // stops timer function
        this.setState({ // resets to the default state
            timeStarted: false,
            timeStopped: true,
            totalSeconds: 1500,
            timer: 0,
            minutes : 25,
            seconds : 0,
            minutes1 : '25',
            seconds1 : '00'
        });
        console.log("Timer reset");
    }

    render() {
        return (
          <div>
              {/* <div>Total Seconds: {this.state.totalSeconds} </div> */}
              <div className="timeDisplay">{this.state.minutes1} : {this.state.seconds1}</div>
              <button onClick={this.startTimer}> Start</button>
              <button onClick={this.stopTimer}> Stop</button>
              <button onClick={this.resetTimer}> Reset</button>
          </div>
        );
      }
}