import React, { Component } from 'react';

class UnitValue extends Component {
    render(){
        return (
            <div className='unitValue'>
                From
                <div className='value'>value</div>
                <div className='sub-units'>Units</div>
            </div>
        )
    }
}

export default UnitValue;