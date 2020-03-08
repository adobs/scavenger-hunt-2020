import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Enigma from './components/enigma';
import Solved from './components/Solved';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Nav />
            <Route exact path='/' component={Enigma} />
            <Route path='/solved' component={Solved} />
        </Router>
    </div>
  );
}

export default App;
