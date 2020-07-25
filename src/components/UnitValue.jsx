import React, { Component } from 'react';

class UnitValue extends Component {
    render(){
        return (
            <div className='unitValue'>
                <div className='fromTo'>From</div>
                <input className='value' />
                <div className='sub-units'>Units</div>
            </div>
        )
    }
}

export default UnitValue;