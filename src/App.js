import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home'
import Nav from './Components/Nav';
import Error from './Components/Error';
import AboutUs from './Components/AboutUs';
import Patrocinadores from './Components/Patrocinadores'
import Jugadores from './Components/Jugadores'
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch >
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about-us">
          <AboutUs/>
        </Route>
        <Route exact path="/patrocinadores">
          <Patrocinadores/>
        </Route>
        <Route exact path="/jugadores">
          <Jugadores/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route component={Error}/>

        </Switch>
    </Router>
);
}

export default App;
