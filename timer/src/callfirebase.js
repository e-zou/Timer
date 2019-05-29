import React, {Component} from 'react';
import firebase from './fire.js';
import Taskpage from './taskpage';

export default class Tasks extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            tasks:"",
            date:"",
            time:"",
            array:[]
        }
    }

    handleClick = (e) => {
        var ref = firebase.database().ref('tasks');
        const user = {
            tasks: this.state.tasks,
            date: this.state.date,
            time: this.state.time
        };
        ref.push(user);
        this.setState({
            tasks:"",
            date:"",
            time:""
        })

        ref.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items){
                newState.push({
                    key:item,
                    tasks: items[item].tasks,
                    date: items[item].date,
                    time: items[item].time
                });
            }
            this.setState({
                array: newState
            })
        })
    }

    updateField (field, newValue) { // on change, update value
        this.setState({
            ...this.state,
            [field]: newValue
        });
    }

    render(){
        return(
            <div>
                <Taskpage date={this.state.data} 
                tasks={this.state.date} 
                time={this.state.time} 
                array={this.state.array}
                handleClick={this.handleClick}
                updateTasks={newValue => this.updateField("tasks", newValue)}
                updateDate={newValue => this.updateField("date", newValue)}
                updateTime={newValue => this.updateField("time", newValue)}
                updateArray={newValue => this.updateField("array", newValue)}
                />
            </div>
        )
    }
}