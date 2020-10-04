import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home'
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch >
        <Route exact path="/">
          <Home/>
        </Route>
        </Switch>
    </Router>
);
}

export default App;
