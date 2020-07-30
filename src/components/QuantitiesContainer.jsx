import React, { Component } from 'react';
import Unit from './Unit';
import UnitValue from './UnitValue';
import apiService from '../service/ApiService'

class QuantitiesContainer extends Component { 
    constructor(props){
        super(props);
        this.state = {
            currentMainUnit: "",
            mainUnits:[],
            subUnits:[],
            From:this.props.units[0].subUnits[0],
            To:this.props.units[0].subUnits[0],
            fromValue:0,
            toValue:0
        }
    }

    componentDidMount() {
        apiService.getMainUnits()
        .then(mainUnitsData => {
            apiService.getSubUnits(mainUnitsData[0])
                .then(subUnitsData => {
                    this.setState({
                        mainUnits: mainUnitsData,
                        currentMainUnit:mainUnitsData[0],
                        subUnits:subUnitsData
                    })
                })
        });
    }

    changeCurrentUnit = (mainUnit) => {
        apiService.getSubUnits(mainUnit)
        .then( subUnitsData =>
            this.setState({
                subUnits:subUnitsData 
            })
        )
    } 

    selectUnit = (event) => {
        console.log([event.target.name] + ":" + event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() { 
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {this.state.mainUnits.map( (mainUnit,index) => <Unit mainUnit={mainUnit} key={index} selectUnitType={this.changeCurrentUnit}/>)}    
                </div>
                <div className='unitValues'>
                    <UnitValue unitType='From' units={this.state.subUnits} change={this.selectUnit} fromValue={this.state.fromValue}/>
                    <UnitValue unitType='To' units={this.state.subUnits}  change={this.selectUnit} fromValue={this.state.toValue}/>
                </div>
            </div>
        )
    }
}

export default QuantitiesContainer;