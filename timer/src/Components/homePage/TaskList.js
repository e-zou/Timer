import React from 'react';
import SendDataButton from './SendDataButton.js';
import Button from '@material-ui/core/Button';

export default class TaskList extends React.Component {
    // dummy values in state that will be passed in from callfirebase.js
    state = { 
        user: this.props.user, // passed in from home.js 

        // adding values into arrays
        addtask: "",
        addtime: "",
        adddate: "",
        addcheck: "",

        // user-facing (organizes data)
        tasks: [], // {task: "", time: "", date: ""}
        times: [],
        dates: [],

        // admin-facing (copies to store hidden dates)
        times1: [],

        // checks 
        checks: [],

        // detects for any checks
        checked: false,

        // checked arrays to send to firebase
        dataToSend: []
    }

    // Get Date 
    getDate = () => {
        if (this.state.checked == true) {
            let today = new Date();
            // Date
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            let date = mm + '-' + dd + '-' + yyyy;
            return date
        } else {
            return ""
        }
    }

    // Get Time
    getTime = () => {
        if (this.state.checked == true) {
            let today = new Date();
            // Time
            let hours = String(today.getHours()).padStart(2, '0');
            let mins = String(today.getMinutes()).padStart(2, '0');

            let time = hours + ':' + mins;
            return time
        } else {
            return ""
        }
    }

    getTime2 = () => {
        let today = new Date();
        // Time
        let hours = String(today.getHours()).padStart(2, '0');
        let mins = String(today.getMinutes()).padStart(2, '0');

        let time = hours + ':' + mins;
        return time
    }

    
    // Update Checked
    updateCheck = (index) => {
        let updateCheckArr = this.state.checks;
        updateCheckArr[index.index] == true ? updateCheckArr[index.index] = false : updateCheckArr[index.index] = true
        this.setState({
            checks : updateCheckArr
        })

    }

    // Update specific time in time list
    updateTime = (index) => { 
        if (this.state.checks[index.index] == false) { // if it's true, set the current time at position (aka only update completed tasks)
            let updatedTimeArr = this.state.times
            updatedTimeArr[index.index] = this.getTime();
            this.setState({
                times : updatedTimeArr
            })
        } else { // if false, set current time to send nothing
            let updatedTimeArr = this.state.times
            updatedTimeArr[index.index] = this.state.times1[index.index];
            this.setState({
                times : updatedTimeArr
            })
        }
    }

   // updateField 
   updateField (field, newValue) {
    let today = new Date();
    // Time
    let hours = String(today.getHours()).padStart(2, '0');
    let mins = String(today.getMinutes()).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let date = mm + '-' + dd + '-' + yyyy;
    let time = hours + ':' + mins;
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
        let newTaskList = this.state.tasks
        newTaskList.push(this.state.addtask);
        
        let newTimes = this.state.times
        let newTimes1 = this.state.times1
        this.setState({
            addtime : this.getTime
        })
        newTimes.push("");
        newTimes1.push(this.state.addtime);

        let newDates = this.state.dates
        this.setState({
            adddate : this.getDate
        })
        newDates.push(this.state.adddate);

        let newChecks = this.state.checks
        newChecks.push(false);

        this.setState({
            tasks: newTaskList,
            times : newTimes,
            dates: newDates,
            times1: newTimes1,
            checks : newChecks
        })
    }

    // To-Do send data to database

    // delete tasks
    deleteTask = (index) => {
        // console.log(taskName);
        let newTaskList = [...this.state.tasks];

        let i = index.index
        newTaskList.splice(i, 1);

        this.setState({
            tasks : newTaskList
        })
    }

    deleteCheck = (index) => {
        // console.log(taskName);
        let ind = index.index;

        let newCheckList = [...this.state.checks];

        newCheckList.splice(ind, 1);

        this.setState({
            checks : newCheckList
        })
    }

    deleteDate = (index) => {
        let i = index.index;

        let newDateList = [...this.state.dates];
        newDateList.splice(i, 1);
        this.setState({
            dates : newDateList
        })
    }

    deleteTime = (index) => {
        // console.log(index);
        let i = index.index;
        // console.log(ind);
        let newTimeList = [...this.state.times];
        newTimeList.splice(i, 1);
        console.log(newTimeList);
        this.setState({
            times : newTimeList
        })
    }


    hasUser = (e) => {
        e.preventDefault();
        if (this.state.user != null) { // haven't been logged in
            console.log("there is a user");
        } else { // assumed has been logged in 
            
            // at index checks is true, get data about date, time, and task at that index
            // put them all in seperate arrays

            // merge arrays task : {date: , time: }
            // 
            console.log("no one");
        }
    }


    render () {
        // console.log(this.state.user);

        // console.log(this.state.tasks);
        // console.log(this.state.dates);
        // console.log(this.state.times);
        // console.log(this.state.checks);
        // console.log(this.state.times1);

        return (
        

        <div className="taskLog">
            <form onSubmit={this.onSubmit}>
                <label>Log your task: </label>
                <input placeholder="task" onSubmit={this.onSubmit} onChange={e => {
                    this.updateField("addtask", e.target.value)
                }} value={this.state.addtask}/>
                <Button onClick={this.onSubmit}>Log task</Button>
            </form>
            <table className="taskList">
                <tbody>
                {this.state.tasks.map((task, index) => {
                    return(
                    <tr className="taskRow">
                        <td>{task}</td>
                        <td><input type="checkbox" key={index} onChange={e => {
                            this.updateCheck({index})
                            this.updateTime({index}) // update specific time in time list
                            // this.updateDate({index}) // update specific date in date list
                        }}/></td>
                        <td><Button key={index} className="deleteTask" onClick={e => {
                            this.deleteTask({index})
                            this.deleteTime({index})
                            this.deleteDate({index})
                            this.deleteCheck({index})
                        }}>X</Button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <SendDataButton
            user={this.state.user}
            tasks={this.state.tasks} 
            times={this.state.times} 
            dates={this.state.dates}
            />
        </div>
           
        );
    }

}