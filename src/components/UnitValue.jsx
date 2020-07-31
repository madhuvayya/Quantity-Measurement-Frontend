import React from 'react';

function  UnitValue(props){

    const handleValueChange = (event) => {
        props.changeValue(event);
    }

    const handleUnitsChange = (event) => {
        props.changeUnit(event);
    }

    return (
        <div className='unitValue'>
            <div>{props.unitType}</div>
            <div className='unit-value'><input type="number"  name={props.unitType} value={props.value} onChange={handleValueChange}></input></div>
            <div className='sub-units'>            
                <select name={props.unitType} onChange={handleUnitsChange}>
                    {props.units.map(unit => <option value={unit} key={unit} disabled={ props.selectedUnit === unit ? true : false}>{unit}</option>)}
                </select>
            </div>
        </div>
    )
}

export default UnitValue;