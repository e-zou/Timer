import React, {Component} from 'react';
import { Redirect, Route, Router } from "react-router-dom";
import Home from '../homePage/home.js'
import Login from './login.js'
import fire from './fire.js';
import MainPage from '../mainpage.js';


class SignupPage extends Component{

    constructor(props){
      super(props);
      this.state = {
        user: {},
      }
    }
  
    componentDidMount(){
      this.authListener();
    }
  
    authListener(){
      fire.auth().onAuthStateChanged((user)=>{
      //  console.log(user)
        if(user){
          this.setState({user});
      //    localStorage.setItem('user',user.uid);
        } else{
          this.setState({user: null})
      //    localStorage.removeItem('user');
        }
        console.log(user)
      })
    }

    /* loggedIn () {
      return (
      <div>
        <Redirect to = '/'/>
        <MainPage user={this.state.user}/>
      </div>    
      )
    } */
    
    render(){
      console.log("Sign up Page: " + this.state.user)

      // console.log(this.state.user);
      //If logged in, route back to home page
      return(
        <div className="Routing">
        
      {this.state.user ?  (<Home user = {this.state.user}/>): (<Login/>)} {/*//if there is user, render home, otherwise push to login*/}
        </div>
      )
    }
  }
  
  export default SignupPage;
  
