import React from 'react';
import Timer from './Timer.js';
import TaskList from './TaskList.js';
import HasUserSet from './../loginPage/HasUserSet.js';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import Box from '@material-ui/core/Box';
import './Timer.css';

export default class Profile extends React.Component {

    state = {
        user : this.props.user
    }

    render () {
        // console.log(this.state.user);
        return (
        <div>
        <MuiThemeProvider theme={theme}>
        <div className="homeDisplay">
            <div className="emptyMainSection"></div>
            <Timer />
            <TaskList user={this.state.user}/>
        </div>
        </MuiThemeProvider>
        </div>
           
        );
    }

}