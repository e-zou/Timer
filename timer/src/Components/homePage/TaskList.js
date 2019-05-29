import React from 'react';


export default class TaskList extends React.Component {
    // dummy values in state that will be passed in from callfirebase.js
    state = { 
        addtask: "",
        tasks: ["brush teeth", "do homework", "figure out firebase"]
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
        let newTaskList = this.state.tasks;
        let index = newTaskList.indexOf(taskName); // find index of where taskname is at
        if (index > -1) {
            newTaskList.splice(index, 1);
        }
        this.setState({
            tasks : newTaskList
        })
    }

  

    render () {
        //let tasks = ["brush teeth", "do homework", "figure out firebase"];
        return (
        <div className="taskLog">
            <form onSubmit={this.onSubmit}>
                <label>Log your task: </label>
                <input placeholder="task" onSubmit={this.onSubmit} onChange={e => this.updateField("addtask", e.target.value)} value={this.state.addtask}/>
                <button onClick={this.onSubmit}>Log task</button>
            </form>
            
            <div className="taskList">
                {this.state.tasks.map(task => (
                    <div>
                        <p>{task}</p>
                        {/* <button className="deleteTask" onClick={this.deleteTask({task})}>X</button> */}
                    </div>
                ))}
            </div>
            
            <div className="sendData">

            </div>
        </div>
           
        );
    }

}