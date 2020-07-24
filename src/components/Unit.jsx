import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return <div class='unit'>
            <div>{this.props.unitType}</div>
            </div>
    }
}

export default Unit;