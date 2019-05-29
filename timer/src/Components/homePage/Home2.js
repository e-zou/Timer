import React, {Component} from 'react';
import fire from '../loginPage/fire'

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
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home2;