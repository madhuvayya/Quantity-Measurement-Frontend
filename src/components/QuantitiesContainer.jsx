import React, { Component } from 'react';
import Unit from './Unit';
import UnitValue from './UnitValue';

class QuantitiesContainer extends Component { 
    constructor(props){
        super(props);
        this.state = {
            currentUnit: this.props.quantities[0],
            currentSubUnits: this.props.quantities[0].subUnits
        }
    }

    render() {
        const units = [ 'Length','Temparature','Volume']  
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {this.props.quantities.map( unit => <Unit unitType={unit.mainUnit} />)}    
                </div>
                <div className='unitValues'>
                    <UnitValue unitType='From' units={this.state.currentSubUnits}/>
                    <UnitValue unitType='To' units={this.state.currentSubUnits}/>
                </div>
            </div>
        )
    }
}

export default QuantitiesContainer;