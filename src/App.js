import React from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting'
import QuantitiesContainer from './components/QuantitiesContainer'
import unitsdata from './unitsdata'

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <QuantitiesContainer units={unitsdata.units} />
    </div>
  );
}

export default App;
