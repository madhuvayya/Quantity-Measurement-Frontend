import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Measurement from './pages/Measurement.jsx'
import History from './pages/History';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Measurement} />
        <Route path="/history" component={History} />
    </Router>
  );
}

export default App;
