import React, { Component } from 'react';
import Unit from './Unit';
import UnitValue from './UnitValue';
import axios from 'axios'

class QuantitiesContainer extends Component { 
    constructor(props){
        super(props);
        this.state = {
            currentUnit: "this.props.units[0]",
            active:"length",
            units:[],
            subUnits:[],
            From:this.props.units[0].subUnits[0],
            To:this.props.units[0].subUnits[0],
            fromValue:0,
            toValue:0
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/quantity-measurement/measurements",{})
        .then(response => { console.log(response.data);
            this.setState({
                units:response.data,
                currentUnit:response.data[0],
            })
        })
        .catch((error) => console.log(error)); 
    }

    componentDidMount(){
        axios.get("http://localhost:8080/quantity-measurement/measurements/Length",{})
        .then(response =>{
            console.log(response.data);
            this.setState({
                subUnits:response.data
            })
        })
        .catch( error => console.log(error))    
    }

    changeCurrentUnit = (mainUnit) => {
        this.setState({
            currentUnit:mainUnit  
        })
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
                console.log({this.state.subUnits[0]});
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {this.state.units.map( (mainUnit,index) => <Unit mainUnit={mainUnit} key={index} selectUnitType={this.changeCurrentUnit}/>)}    
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