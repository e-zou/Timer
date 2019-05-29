import React, {Component} from 'react';
import fire from './fire'

class Home2 extends Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home2;