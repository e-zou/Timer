import React from 'react';
import SendDataButton from './SendDataButton.js';


export default class TaskList extends React.Component {
    // dummy values in state that will be passed in from callfirebase.js
    state = { 
        user: this.props.user, // passed in from home.js 
        addtask: "",
        tasks: ["brush teeth", "do homework", "figure out firebase"], // {task: "", time: "", date: ""}
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
        this.setState({
            tasks: newTaskList
        })
    }

    // To-Do send data to database

    // delete tasks
    deleteTask = (taskName) => {
        console.log(taskName);
        let newTaskList = [...this.state.tasks];
        for (let i = newTaskList.length-1; i>=0; i--) {
            if (newTaskList[i] == taskName.task) {
                newTaskList.splice(i, 1);
            }
        }

        console.log(newTaskList);

        this.setState({
            tasks : newTaskList
        })
        
        // console.log(this.state.tasks);
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


        return (
        <div className="taskLog">
            <form onSubmit={this.onSubmit}>
                <label>Log your task: </label>
                <input placeholder="task" onSubmit={this.onSubmit} onChange={e => this.updateField("addtask", e.target.value)} value={this.state.addtask}/>
                <button onClick={this.onSubmit}>Log task</button>
                
            </form>
            <table className="taskList">
                <tbody>
                {this.state.tasks.map((task, index) => {
                    return(
                    <tr className="taskRow">
                        <td>{task}</td>
                        <td><button key={index} className="deleteTask" onClick={e => this.deleteTask({task})}>X</button></td>
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