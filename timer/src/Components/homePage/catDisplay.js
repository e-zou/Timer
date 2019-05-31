import React, { Components } from 'react';

export default class CatDisplay extends React.Component {

    render () {
        return (
            <div>
            {this.props.picture ? (<img src={this.props.picture}  height="300" width="300"/>) : null}
            </div>
        )
    }
}