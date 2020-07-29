import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return (
            <div className='unit' id={this.props.mainUnit.type} onClick={() => this.props.selectUnitType(this.props.mainUnit)}>
                <div>{this.props.mainUnit.type}</div>
            </div>
        )}
}

export default Unit;