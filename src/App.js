import React from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting'
import QuantitiesContainer from './components/QuantitiesContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <QuantitiesContainer />
    </div>
  );
}

export default App;
