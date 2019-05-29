import React, {Component} from 'react';
import Tasks from './callfirebase'

export default class Taskpage extends Component{
    render(){
        return(
            <div>
                {this.props.tasks}
            </div>
        )
    }
}