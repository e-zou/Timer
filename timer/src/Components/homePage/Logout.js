import React, {Component} from 'react';
import fire from '../loginPage/fire'
import Button from '@material-ui/core/Button';

class Logout extends Component{
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
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}
export default Logout;