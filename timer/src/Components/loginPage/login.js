import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import fire from './fire';
import Button from '@material-ui/core/Button';
import firebase from './../homePage/Timer.css';
import Input from '@material-ui/core/Input';
import './index.css'


class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
        this.state ={
            email: "",
            password: ""
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
        }).catch((error) => {console.log(error);})
        //pass email and password user enters in form
    }
   /* handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }*/

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        return(
            <div class="login">
                <form>
                    <Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="email" name="email" placeholder="enter email"/> <br/>
                    <Input value={this.state.password} onChange={e => this.setState({password: e.target.value})} type="password" name="password" placeholder="enter password"/> <br/>
                    <div class="loginbutton">
                        <Button onClick={this.login}> Login </Button>
                        <Button onClick={this.signup}> Sign up </Button>
                    </div>
                </form>
             
            </div>
        )
    }
}
export default Login;