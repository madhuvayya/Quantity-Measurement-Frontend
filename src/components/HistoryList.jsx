import React  from 'react'
import '../styles/history.scss'

function HistoryList(){

    var historyData = [];

    const getValues= () => {
        for (let i = 0; i < localStorage.length; i++) {
            let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            historyData[i] = obj;
        } 
    }

    const getTableHeaders = () => {
        let header = Object.keys(historyData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
       })
    }

    const getData = () => {
        return historyData.map( obj => {
            const { measurement, firstUnit, firstUnitValue, secondUnit,convertedValue } = obj //destructuring
            return (
               <tr>
                  <td>{measurement}</td>
                  <td>{firstUnit}</td>
                  <td>{firstUnitValue}</td>
                  <td>{secondUnit}</td>
                  <td>{convertedValue}</td>
               </tr>
            )
         })
    }
 
    return (
            <div className='history-table'>
                {getValues()}
                <h2 id='title'>History</h2>
                 <table>
                     <tbody>
                         <tr>{getTableHeaders()}</tr>
                        {getData()}
                    </tbody>
                </table>
                <hr/>
            </div>
    )
}

export default HistoryList; 