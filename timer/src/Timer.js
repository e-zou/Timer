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
        initialSeconds: 1500, // to calculate svg circle proportion
        timer: 0, // function used to set and clear intervals
        minutes : 25,
        seconds : 0,

        // displayed variables
        minDisplay : '25',
        secDisplay : '00',

        // timer types
        shortBreakTimer : false,
        longBreakTimer : false,
        workTimer : true,
    }

    formatTime = (seconds) => { // converts into proper minutes and seconds
        let min = Math.floor(this.state.totalSeconds / 60); 
        let sec = this.state.totalSeconds % 60;
        this.setState({
            minutes : min,
            seconds : sec,
            minDisplay : ("0" + min).slice(-2),
            secDisplay : ("0" + sec).slice(-2),
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

    timerType = () => {
        if (this.state.workTimer == true) { // 25 min work timer
            this.setState({ // resets to the default state
                totalSeconds: 1500,
                initialSeconds: 1500,
                minutes : 25,
                seconds : 0,
                minDisplay : '25',
                secDisplay : '00'
            });
        }
        if (this.state.shortBreakTimer == true) { // 5 min break timer
            this.setState({
                totalSeconds: 300,
                initialSeconds: 300,
                timer: 0,
                minutes : 5,
                seconds : 0,
                minDisplay : '05',
                secDisplay : '00',
            })
        }
        if (this.state.longBreakTimer == true) { // 10 min break timer
            this.setState({
                totalSeconds: 600,
                initialSeconds: 600,
                timer: 0,
                minutes : 10,
                seconds : 0,
                minDisplay : '10',
                secDisplay : '00',
            })
        }
    }

    resetTimer = (e) => { // resets timer
        e.preventDefault();
        clearInterval(this.state.timer); // stops timer function
        this.setState({ // resets to the default state
            timeStarted: false,
            timeStopped: true,
            timer: 0,
        });
        this.timerType();
        console.log("reset timer");
    }

    fiveMinTimer = (e) => {
        e.preventDefault();
        clearInterval(this.state.timer);
        this.setState({ // resets to the default state
            timeStarted: false,
            timeStopped: true,
            totalSeconds: 300,
            initialSeconds: 300,
            timer: 0,
            minutes : 5,
            seconds : 0,
            minDisplay : '05',
            secDisplay : '00',
            shortBreakTimer : true,
            longBreakTimer : false,
            workTimer : false,
        });
    }

    tenMinTimer = (e) => {
        e.preventDefault();
        clearInterval(this.state.timer);
        this.setState({ // resets to the default state
            timeStarted: false,
            timeStopped: true,
            totalSeconds: 600,
            initialSeconds: 600,
            timer: 0,
            minutes : 10,
            seconds : 0,
            minDisplay : '10',
            secDisplay : '00',
            shortBreakTimer : false,
            longBreakTimer : true,
            workTimer : false,
        });
    }

    workTimer = (e) => {
        e.preventDefault();
        clearInterval(this.state.timer);
        this.setState({ // resets to the default state
            timeStarted: false,
            timeStopped: true,
            totalSeconds: 1500,
            initialSeconds: 1500,
            timer: 0,
            minutes : 25,
            seconds : 0,
            minDisplay : '25',
            secDisplay : '00',
            shortBreakTimer : false,
            longBreakTimer : false,
            workTimer : true,
        });
    }

    render() {
        return (
          <div>
            <div className="timerTypes">
                <button onClick={this.workTimer}> Work </button>
                <button onClick={this.fiveMinTimer}> Short Break </button>
                <button onClick={this.tenMinTimer}> Long Break</button>
            </div>

            <div className="timeDisplay">
                <TimerCircle circumference={this.state.totalSeconds} initialSeconds={this.state.initialSeconds}/>
                <div className="timerNumbers">{this.state.minDisplay} : {this.state.secDisplay}</div>
            </div>
              
            <div className="timerButtons">
                <button onClick={this.startTimer}> Start</button>
                <button onClick={this.stopTimer}> Stop</button>
                <button onClick={this.resetTimer}> Reset</button>
            </div>

          </div>
        );
    }

}
