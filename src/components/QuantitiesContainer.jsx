import React, { Component } from 'react';
import Unit from './Unit';
import UnitValue from './UnitValue';

class QuantitiesContainer extends Component { 
    constructor(props){
        super(props);
        this.state = {
            currentUnit: this.props.quantities[0],
        }
    }

    changeCurrentUnit = (mainUnit) => {
        this.setState({
            currentUnit:mainUnit  
        })
    } 

    render() { 
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {this.props.quantities.map( (mainUnit,index) => <Unit mainUnit={mainUnit} key={index} selectUnit={this.changeCurrentUnit}/>)}    
                </div>
                <div className='unitValues'>
                    <UnitValue unitType='From' units={this.state.currentUnit.subUnits} />
                    <UnitValue unitType='To' units={this.state.currentUnit.subUnits} />
                </div>
            </div>
        )
    }
}

export default QuantitiesContainer;