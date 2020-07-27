import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return <div className='unit' id={this.props.unitType}>
            <div>{this.props.unitType}</div>
            </div>
    }
}

export default Unit;