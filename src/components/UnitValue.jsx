import React from 'react';

function  UnitValue(props){

    const handleChange = (event) => {
        props.change(event);
    }

    return (
        <div className='unitValue'>
            <div>{props.unitType}</div>
    <div className='value' name={props.unitType} onChange={handleChange}><input type='' value={props.fromValue}></input></div>
            <div className='sub-units'>            
                <select name={props.unitType} onChange={handleChange}>
                    {props.units.map( (unit,index) => <option value={unit} key={index}>{unit}</option>)}
                </select>
            </div>
        </div>
        )
}

export default UnitValue;