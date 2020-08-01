import React from 'react';
import Header from '../components/Header'
import Greeting from '../components/Greeting'
import QuantitiesContainer from '../components/QuantitiesContainer'

function Measurement() {
  return (
    <>
      <Header navLinkName='History'/>
      <Greeting />
      <QuantitiesContainer />
    </>
  );
}

export default Measurement;