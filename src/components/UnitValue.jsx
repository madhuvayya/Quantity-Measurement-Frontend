import React, { Component } from 'react';

class UnitValue extends Component {
    render(){
        return (
            <div className='unitValue'>
                <div>{this.props.unitType}</div>
                <div className='value'><input /></div>
                <div className='sub-units'>            
                <select>
                    {this.props.units.map( (unit,index) => <option value={unit} key={index}>{unit}</option>)}
                </select>
                </div>
            </div>
        )
    }
}

export default UnitValue;