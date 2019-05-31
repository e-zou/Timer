import React from 'react';
import SendDataButton from './SendDataButton.js';
import Button from '@material-ui/core/Button';
import firebase from './../loginPage/fire.js';
import Input from '@material-ui/core/Input';

export default class TaskList extends React.Component {
    // dummy values in state that will be passed in from callfirebase.js
    state = { 
        user: this.props.user, // passed in from home.js 

        // adding values into arrays
        addtask: "",
        addtime: "",
        adddate: "",
        addcheck: "",

        // admin-facing (organizes data)
        tasks: [], // {task: "", time: "", date: ""}
        times: [],
        dates: [],

        // userfacing
        tasks1: [], // {task: "", time: "", date: ""}
    }

    // Get Date 
    getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let date = mm + '-' + dd + '-' + yyyy;
        return date
    }

    // Get Time
    getTime = () => {
        let today = new Date();
        let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, })
        return time
    }

    // Update specific time in time list
    updateTime = (index) => { 
        let updatedTimeArr = this.state.times
        updatedTimeArr[index.index] = this.getTime();
        this.setState({
            times : updatedTimeArr
        })
    }

   // updateField 
   updateField (field, newValue) {
    // formats time & date fields
    let today = new Date();
    // formates time
    let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, })
    // formats date
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let dd = String(today.getDate()).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = mm + '-' + dd + '-' + yyyy;
    
    // let time = hours + ':' + mins;
       this.setState({
           ...this.state,
           [field]: newValue,
           addtime : time,
           adddate : date,
       });
   }

    // onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        if (e.value != "") {
        // task
        let newTaskList = this.state.tasks
        let newTaskList1 = this.state.tasks1
        newTaskList.push(this.state.addtask);
        newTaskList1.push(this.state.addtask);
        
        // time
        let newTimes = this.state.times
        this.setState({
            addtime : this.getTime
        })
        newTimes.push(this.state.addtime);

        // date
        let newDates = this.state.dates
        this.setState({
            adddate : this.getDate
        })
        newDates.push(this.state.adddate);

        // setting states
        this.setState({
            tasks: newTaskList,
            times : newTimes,
            dates: newDates,
            addtask: "",
        })
    }
    }

    // Delete tasks along wiht their date and times
    deleteTask = (index) => {
        let newTaskList = [...this.state.tasks];
        let newTaskList1 = [...this.state.tasks1];
        let newDateList = [...this.state.dates];
        let newTimeList = [...this.state.times];

        let i = index.index
        newTaskList.splice(i, 1);
        newTaskList1.splice(i, 1);
        newDateList.splice(i, 1);
        newTimeList.splice(i, 1);

        this.setState({
            dates : newDateList,
            times : newTimeList,
            tasks : newTaskList,
            tasks1 : newTaskList1
        })
    }


    formatData = (e) => {
        e.preventDefault();
        if (firebase.auth().currentUser != null) {
            var userId = firebase.auth().currentUser.uid;
            this.setState({
                user: userId
            })
            for (let i = 0; i < this.state.times.length ; i++) {
                const user = firebase.database().ref("users/" + userId);

                let usertasks = {
                    task: this.state.tasks[i],
                    date: this.state.dates[i],
                    time: this.state.times[i],
                }
                user.push(usertasks)
            }
            console.log("Made new array");
            this.setState({
                tasks1 : []
            })
        }

    }

    // Checks to see if user has been logged in or not
    hasUser = (e) => {
        if (this.state.user != null) { // haven't been logged in
            console.log("there is a user");
            return true;
        } else { // assumed has been logged in 
            
            // at index checks is true, get data about date, time, and task at that index
            // put them all in seperate arrays

            // merge arrays task : {date: , time: }
            // 
            console.log("no one");
            return false;
        }
    }


    render () {
        // console.log(this.state.user);

        // console.log(this.state.tasks);
        // console.log(this.state.dates);
        // console.log(this.state.times);
        // console.log(this.state.checks);
        // console.log(this.state.times1);
        this.hasUser();
        return (
        <div className="taskLog">
            <div className="taskLogBox">
            <form onSubmit={this.onSubmit}>
                <Input fullWidth={true} placeholder="Log your task" onSubmit={this.onSubmit} onChange={e => {
                    this.updateField("addtask", e.target.value)
                }} value={this.state.addtask}/>
                {/* <Button onClick={this.onSubmit}><i class="material-icons">add</i></Button> */}
            </form>
            <table className="taskList">
                <tbody>
                {this.state.tasks1.map((task, index) => {
                    return(
                    <tr className="taskRow">
                        <td className="taskName">{task}</td>
                        <td className="taskDelete"><Button key={index} className="deleteTask" onClick={e => {
                            this.deleteTask({index})
                            // this.deleteCheck({index})
                        }}><i class="material-icons">close</i></Button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <Button onClick={this.formatData}> Save Completed </Button>       
            </div>
        </div>
           
        );
    }

}