import React, { Fragment } from 'react';
import Header from '../components/Header'
import Greeting from '../components/Greeting'
import QuantitiesContainer from '../components/QuantitiesContainer'

function Measurement() {
  return (
    <Fragment>
      <Header navLinkName='History'/>
      <Greeting />
      <QuantitiesContainer />
    </Fragment>
  );
}

export default Measurement;