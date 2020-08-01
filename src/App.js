import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Measurement from './pages/Measurement.jsx'
import History from './pages/History';

function App() {
  return (
    <Router>
        <div className="App">
          <Route exact path="/" component={Measurement} />
       </div>
        <Route path="/history" component={History} />
    </Router>
  );
}

export default App;
