import React, { Component } from 'react';
import Unit from './Unit';

class QuantitiesContainer extends Component { 
    render() {
        
        const units = [ 'Length','Temparature','Volume']  
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {units.map( unit => <Unit unitType={unit} />)}    
                </div>
            </div>
        )
    }
}

export default QuantitiesContainer;