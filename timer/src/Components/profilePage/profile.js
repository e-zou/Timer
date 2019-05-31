import React from 'react';
import firebase from "../loginPage/fire.js";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import { Card, List, ListItem, ListItemText, Typography,  Divider } from '@material-ui/core';

export default class Profile extends React.Component {

    state = {
        tasks : [], name : ""
    }

    componentDidMount() {

        const usersRef = firebase.database().ref('users');
        const user = (firebase.auth().currentUser ? firebase.auth().currentUser : "Reload the Page"); //specific user id for logged in user
        console.log(user)

        if (user != null) {
            this.setState({name : user.email})
        }

        usersRef.on('value', (snapshot) => {
       // console.log(snapshot.val())
        let items = snapshot.val() || [];
         
        const entries = Object.entries(items)
        console.log(entries)
        for (const [id, tasks] of entries) {
            if(id === user.uid) {
            const taskArray = Object.values(tasks)
            //const entries3 = Object.entries(entries2)
            this.setState({tasks : taskArray})
            }
          }
        });
    }

    render () {
        console.log(this.state.tasks)
    
        return (
        
        <div>
             <MuiThemeProvider theme={theme}>
                 <Card>
                 <List alignItems="center">
                <Typography variant = "h5" color = "primary">{this.state.name}'s Profile Page</Typography>
                <Typography variant = "h6" color = "secondary">Congratulations on completing {this.state.tasks.length} tasks!</Typography>
                <Divider />
                 {this.state.tasks.map(resulter => (   
                  <ListItem alignItems="center">
                  <ListItemText primary={resulter.task} secondary={resulter.date + ", " + resulter.time} />
                  </ListItem>
            
                  ))}
                </List>
                </Card>
              </MuiThemeProvider>
        </div>
           
        );
    }

}

{/* <header>Profile Page!</header>
              {this.state.tasks.map(resulter => ( <ul key ={resulter.date} >{resulter.date}{resulter.task}{resulter.time}</ul>)) */}