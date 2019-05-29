import React from 'react';
import {Link} from "react-router-dom";


export default class Header extends React.Component {

    render () {
        return (
            <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/profile/'>Profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            </div>
           
        );
    }

}
