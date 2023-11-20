
// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './src/Components/NavBar';
import Home from './src/Components/Home';
import Movies from './src/Components/Movies';
import Directors from './src/Components/Directors';
import Actors from './src/Components/Actors';





const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;

