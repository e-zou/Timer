import React, { Component } from 'react';


export default class SendDataButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Send Data</button>
            </div>
        );
    }

}