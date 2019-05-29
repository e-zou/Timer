import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import fire from './fire'

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
            <div>
                <form>
                    <input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="email" name="email" placeholder="enter email"/>
                    <input value={this.state.password} onChange={e => this.setState({password: e.target.value})} type="password" name="password" placeholder="enter password"/>
                    <button onClick={this.login}> Login </button>
                    <button onClick={this.signup}> Sign up </button>
                </form>
             
            </div>
        )
    }
}
export default Login;