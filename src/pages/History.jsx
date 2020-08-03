import React from 'react';
import Header from '../components/Header'
import Greeting from '../components/Greeting'
import HistoryList from '../components/HistoryList';

function History() {

  const getRenderComponent = () => {
    if (localStorage.length !== 0)
        return <HistoryList />;
    return "No data"    
  } 

  return (
    <React.Fragment>
      <Header navLinkName=''/>
      <Greeting />
      {getRenderComponent()}
    </React.Fragment>
  );
}

export default History;