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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
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

    render(){
        return(
            <div>
                <label for="date">Date: </label>
                <input value = {this.state.date} type="date"
                onChange = {e => this.setState({date: e.target.value})}/> <br/>
                
                <label for="time">Time: </label>
                <input value = {this.state.time} type="time"
                onChange = {e => this.setState({time: e.target.value})}/><br/>

                <label for="tasks done">Enter tasks: </label>
                <input value = {this.state.tasks}
                onChange = {e => this.setState({tasks: e.target.value})}/><br/>

                <button onClick={this.handleClick}>Log tasks!</button>

                {this.state.array.map(x=>
                    <li key={x.id}>
                        Date: {x.date} <br/>
                        Time: {x.time} <br/>
                        Tasks: {x.tasks} <br/>
                    </li>)}
                {/*<Taskpage tasks={this.state.tasks}/>*/}
            </div>
        )
    }
}