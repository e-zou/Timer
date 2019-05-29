import React, {Component} from 'react';
import Tasks from './callfirebase'

export default class Taskpage extends Component{
    render(){
        return(
            <div>
                <label for="date">Date: </label>
                <input value = {this.props.date} type="date"
                onChange = {e => this.props.updateDate}/> <br/>
                
                <label for="time">Time: </label>
                <input value = {this.props.time} type="time"
                onChange = {e => this.props.updateTime}/><br/>

                <label for="tasks done">Enter tasks: </label>
                <input value = {this.props.tasks}
                onChange = {e => this.props.updateTasks}/><br/>

                <button onClick={this.props.handleClick}>Log tasks!</button>

                {this.props.array.map(x=>
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