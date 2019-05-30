import React from 'react';
import firebase from "../loginPage/fire.js";

export default class Profile extends React.Component {

    state = {
        tasks : []
    }

    componentDidMount() {

        const usersRef = firebase.database().ref('users');
        const user = (firebase.auth().currentUser.uid ? firebase.auth().currentUser.uid : "Reload the Page"); //specific user id for logged in user
        console.log(user)

        usersRef.on('value', (snapshot) => {
       // console.log(snapshot.val())
        let items = snapshot.val() || [];
         
        const entries = Object.entries(items)
        console.log(entries)
        for (const [fruit, count] of entries) {
            if(fruit === user) {
            console.log(`There are ${count} ${fruit}s`)
            const entries2 = Object.values(count)
            //const entries3 = Object.entries(entries2)
            console.log(entries2)
            console.log("1")
            this.setState({tasks : entries2})
            }
          }
        });
    }



    render () {
        console.log(this.state.tasks)
    
        return (
        
        <div>
             <header>Profile Page!</header>
              {this.state.tasks.map(resulter => ( <ul key ={resulter.date} >{resulter.date}{resulter.task}{resulter.time}</ul>))}
        </div>
           
        );
    }

}