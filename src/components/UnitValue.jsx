import React, { Component } from 'react';

class UnitValue extends Component {
    render(){
        return (
            <div className='unitValue'>
                <div>{this.props.unitType}</div>
                <input className='value' />            
                <select className='sub-units'>
                    {this.props.units.map(unit => <option value={unit}>{unit}</option>)}
                </select>
            </div>
        )
    }
}

export default UnitValue;