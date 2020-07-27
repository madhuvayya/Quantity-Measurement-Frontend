import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return (
            <button className='unit' id={this.props.mainUnit.type} onClick={this.props.selectUnit.bind(this,this.props.mainUnit)}>
                <p>{this.props.unitType}</p>
            </button>
        )}
}

export default Unit;