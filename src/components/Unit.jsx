import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return (
            <button className={ this.props.mainUnit === this.props.activeMainUnit ? "active-"+this.props.mainUnit : '' } id={this.props.mainUnit} onClick={() => this.props.selectUnitType(this.props.mainUnit)}>
                <div>{this.props.mainUnit}</div>
            </button>
        )}
}

export default Unit;