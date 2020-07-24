import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return <div class='unit'>
            <img src='' alt='unit-image'/>
            <div>{this.props.unitType}</div>
            </div>
    }
}

export default Unit;