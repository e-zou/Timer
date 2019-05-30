import React from 'react';
import {Link} from "react-router-dom";
 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));



const LoginLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/login/" {...props} />
  ));

const HomeLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/" {...props} />
  ));

const ProfileLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/profile/" {...props} />
  ));
export default class Header extends React.Component {
    

    render () {

        return (
         
            <div className={useStyles.root}>
            <MuiThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" className={useStyles.title}>
                  Tomato Time
                </Typography> 
                <Button edge = "start"  component={HomeLink}> <HomeIcon /> Home</Button>
                <Button edge = "start" component={LoginLink}>Login</Button>
                <Button edge = "start"  component={ProfileLink}>Profile</Button>
              </Toolbar>
            </AppBar>
            </MuiThemeProvider>
            </div>
            
        
        );
    }

}

/*
<div>
            <MuiThemeProvider theme={theme}>
            <AppBar position="static">
              <div>
                <Button>
                  <div>Button 1</div>
                </Button>
                <Button>
                  <div>Button 2</div>
                </Button>
              </div>
            </AppBar>
          </MuiThemeProvider>
          </div>
        </div>
*/
