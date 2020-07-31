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
            fromUnit:"",
            toUnit:"",
            fromUnitValue:0,
            toUnitValue:0
        }
    }

    componentDidMount() {
        apiService.getMainUnits()
        .then(mainUnitsData => {
            apiService.getSubUnits(mainUnitsData[0])
                .then(subUnitsData => {
                    apiService.getConvertedValue(mainUnitsData[0],subUnitsData[0],1,subUnitsData[1])
                        .then(convertedValue => {
                            this.setState({
                                mainUnits: mainUnitsData,
                                currentMainUnit:mainUnitsData[0],
                                subUnits:subUnitsData,
                                fromUnit:subUnitsData[0],
                                fromUnitValue:1,
                                toUnitValue: convertedValue
                            })
                        })
                })
        });
    }

    changeCurrentUnit = (mainUnit) => {
        apiService.getSubUnits(mainUnit)
        .then( subUnitsData =>
            this.getResponse(mainUnit,subUnitsData[0],1,subUnitsData[1])
                .then(convertedValue => { 
                    this.setState({
                        currentMainUnit:mainUnit,
                        subUnits:subUnitsData,
                        fromUnit:subUnitsData[0],
                        toUnit:subUnitsData[1],
                        fromUnitValue:1,
                        toUnitValue:convertedValue
                    })
                })
        )
    }

    getResponse = (mainUnit,fromSubUnit,fromSubUnitValue,toSubUnit) => {
        return apiService.getConvertedValue(mainUnit,fromSubUnit,fromSubUnitValue,toSubUnit)
            .then(response => { 
                return response })    
    }
    
    enteredValue = (event) => {
        const eventName = event.target.name;
        const eventValue = event.target.value;
        if(eventName === 'From'){
            this.getResponse(this.state.currentMainUnit,this.state.fromUnit,eventValue,this.state.toUnit)
                    .then(response => { 
                            this.setState({
                                fromUnitValue:eventValue,
                                toUnitValue:response    
                            })
                        });
        } else {
            this.getResponse(this.state.currentMainUnit,this.state.toUnit,eventValue,this.state.fromUnit)
                .then(response => { 
                    this.setState({
                        toUnitValue:eventValue, 
                        fromUnitValue:response
                    })
                });
        }      
    }

    selectedUnit = (event) =>{
        const eventName = event.target.name;
        const eventValue = event.target.value;
        if(eventName === 'From'){
            this.getResponse(this.state.currentMainUnit,eventValue,this.state.fromUnitValue,this.state.toUnit)
            .then(response => { 
                this.setState({
                    fromUnit:eventValue,
                    toUnitValue:response    
                })
            });
        } else {
            this.getResponse(this.state.currentMainUnit,this.state.fromUnit,this.state.fromUnitValue,eventValue)
            .then(response => { 
                this.setState({
                    toUnit:eventValue,
                    toUnitValue:response    
                })
            });
        }
    } 

    render() { 
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {this.state.mainUnits.map( mainUnit => <Unit mainUnit={mainUnit} key={mainUnit} selectUnitType={this.changeCurrentUnit}/>)}    
                </div>
                <div className='unitValues'>
                    <UnitValue unitType='From' units={this.state.subUnits} changeUnit={this.selectedUnit} changeValue={this.enteredValue} selectedUnit={this.state.toUnit} value={this.state.fromUnitValue}/>
                    <UnitValue unitType='To' units={this.state.subUnits}  changeUnit={this.selectedUnit} changeValue={this.enteredValue} selectedUnit={this.state.fromUnit} value={this.state.toUnitValue}/>
                </div>
            </div>
        )
    }
}

export default QuantitiesContainer;