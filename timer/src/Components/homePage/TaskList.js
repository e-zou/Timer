import React from 'react';
import SendDataButton from './SendDataButton.js';


export default class TaskList extends React.Component {
    // dummy values in state that will be passed in from callfirebase.js
    state = { 
        user: this.props.user, // passed in from home.js 
        addtask: "",
        tasks: ["brush teeth", "do homework", "figure out firebase"], // {task: "", time: "", date: ""}
        times: ["10:00", "2:00", "5:00"],
        dates: ["01-01-2020", "09-05-2019", "09-06-2019"],
        checks: [],

        checked: false,
        addtime: "",
        adddate: "",
        dataToSend: {task:"", time:"", date:""}
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
    
    // Update Checked
    updateChecked = () => {
        if (this.state.checked == false) {
            this.setState({
                checked : false
            })
        } else {
            this.setState({
                checked : true
            })
        }
    }

    // Update specific time in time list
    updateTime = (index) => {
        this.updateChecked(); // switches whether the box is checked or not

        if (this.state.checked == true) { // if it's true, set the current time at position (aka only update completed tasks)
            let updatedTimeArr = this.state.times
            for (let i = 0; i < updatedTimeArr.length; i++) {
                updatedTimeArr[i] = this.getTime();
            }
            this.setState({
                times : updatedTimeArr
            })
        } else { // if false, set current time to send nothing
            let updatedTimeArr = this.state.times
            for (let i = 0; i < updatedTimeArr.length; i++) {
                updatedTimeArr[i] = "";
            }
            this.setState({
                times : updatedTimeArr
            })
        }
    }

    // Update specific time in time list
    updateDate = (index) => {
        this.updateChecked(); // switches whether the box is checked or not
        let ind = index.index

        if (this.state.checked == true) {
            let updatedDateArr = this.state.dates
            for (let i = 0; i < updatedDateArr.length; i++) {
                updatedDateArr[i] = this.getDate();
            }
            this.setState({
                times : updatedDateArr
            })
        } else {
            let updatedDateArr = this.state.dates
            for (let i = 0; i < updatedDateArr.length; i++) {
                updatedDateArr[i] = "";
            }
            this.setState({
                times : updatedDateArr
            })
        }
    }
    

   // updateField 
   updateField (field, newValue) {
       this.setState({
           ...this.state,
           [field]: newValue
       });
   }
    // onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        let newTaskList = this.state.tasks
        newTaskList.push(this.state.addtask);
        
        let newTimes = this.state.times
        newTimes.push(this.state.addtimes);

        let newDates = this.state.dates
        newDates.push(this.state.adddates);

        this.setState({
            tasks: newTaskList,
            times : newTimes,
            dates: newDates,
        })
    }

    // To-Do send data to database

    // delete tasks
    deleteTask = (taskName) => {
        // console.log(taskName);
        let newTaskList = [...this.state.tasks];

        for (let i = newTaskList.length-1; i>=0; i--) {
            if (newTaskList[i] == taskName.task) {
                newTaskList.splice(i, 1);
            }
        }
        this.setState({
            tasks : newTaskList
        })
    }

    deleteDate = (index) => {
        let ind = index.index;

        let newDateList = [...this.state.dates];

        for (let i = newDateList.length-1; i>=0; i--) {
            if (newDateList[i] == newDateList[ind]) {
                newDateList.splice(i, 1);
            }
        }
        this.setState({
            dates : newDateList
        })
    }

    deleteTime = (index) => {
        // console.log(index);
        let ind = index.index;
        // console.log(ind);
        let newTimeList = [...this.state.times];
        // console.log(newTimeList[1]);
        for (let i = newTimeList.length-1; i>=0; i--) {
            // console.log("time list item: " + newTimeList[i] + newTimeList[ind]);
            if (newTimeList[i] == newTimeList[ind]) {
                // console.log("there's a match")
                newTimeList.splice(i, 1);
            }
        }
        console.log(newTimeList);
        this.setState({
            times : newTimeList
        })
    }

            
        // if user is not null, put in a button with a function that will send in data.
        // else do nothing


    hasUser = () => {
        if (this.state.user != null) {
            console.log("there is a user");
        } else {
            console.log("no one");
        }
    }


    render () {
        // console.log(this.state.user);

        console.log(this.state.tasks);
        console.log(this.state.dates);
        console.log(this.state.times);
        console.log(this.state.checks);


        return (
        <div className="taskLog">
            <form onSubmit={this.onSubmit}>
                <label>Log your task: </label>
                <input placeholder="task" onSubmit={this.onSubmit} onChange={e => {
                    this.updateField("addtask", e.target.value)
                }} value={this.state.addtask}/>
                <button onClick={this.onSubmit}>Log task</button>
            </form>
            <table className="taskList">
                <tbody>
                {this.state.tasks.map((task, index) => {
                    return(
                    <tr className="taskRow">
                        <td>{task}</td>
                        <td><input type="checkbox" key={index} onChange={e => {
                            this.updateTime({index}) // update specific time in time list
                            this.updateDate({index}) // update specific date in date list
                        }}/></td>
                        <td><button key={index} className="deleteTask" onClick={e => {
                            this.deleteTask({task})
                            this.deleteTime({index})
                            this.deleteDate({index})
                        }}>X</button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <SendDataButton onClick={this.hasUser}/>
        </div>
           
        );
    }

}