import React from 'react';
import Header from '../components/Header'
import Greeting from '../components/Greeting'
import HistoryList from '../components/HistoryList';

function History() {

  const getRenderComponent = () => {
    if (localStorage.length !== 0)
        return <HistoryList />;
    return <p className='no-data'>No Data</p>;    
  } 

  const handleHistory = () => {
    localStorage.clear();
  } 

  return (
    <React.Fragment>
      <Header navLinkName='Clear History' delete={handleHistory} />
      <Greeting />
      {getRenderComponent()}
    </React.Fragment>
  );
}

export default History;