import React from 'react';
import Timer from './Timer.js';
import Home2 from './Home2.js';
import TaskList from './TaskList.js';
import HasUserSet from './../loginPage/HasUserSet.js';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import Box from '@material-ui/core/Box';

export default class Profile extends React.Component {

    state = {
        user : this.props.user
    }

    render () {
        // console.log(this.state.user);
        return (
        <div>
        <MuiThemeProvider theme={theme}>
        <Box >
              <Timer />
              <TaskList user={this.state.user}/>
              <Home2 />
        </Box>
        </MuiThemeProvider>
        </div>
           
        );
    }

}