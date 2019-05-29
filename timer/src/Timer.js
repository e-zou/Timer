import React, { Components } from 'react';
import TimerCircle from './TimerCircle.js';
import './Timer.css';

export default class Timer extends React.Component {
    state = {
        // unused variables
        timeStarted: false,
        timeStopped: true,

        // hidden variables
        totalSeconds: 1500, // total time elapsed in seconds
        timer: 0, // function used to set and clear intervals
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
        if(this.state.totalSeconds > 0 && this.state.timer == 0) { // timer == 0 only happens the first time we click start timer
            this.state.timer = setInterval(this.tick, 1000); // timer is a function used to set variables every 1 second
        }
        console.log("start timer");
    }

    stopTimer = (e) => { // stops timer
        e.preventDefault();
        clearInterval(this.state.timer); // stops the timer function from running
        console.log("stop timer");
        this.setState({
            timeStarted: true,
            timeStopped: false,
            timer: 0, // set timer to zero
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
        console.log("reset timer");
    }

    render() {
        return (
          <div>
              
              <div className="timeDisplay">
                <TimerCircle circumference={this.state.totalSeconds} />
                <p className="timerNumbers">{this.state.minutes1} : {this.state.seconds1}</p>
              </div>
              <button onClick={this.startTimer}> Start</button>
              <button onClick={this.stopTimer}> Stop</button>
              <button onClick={this.resetTimer}> Reset</button>
          </div>
        );
    }

}
