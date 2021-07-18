import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import CngTechnology from './components/technology/cngTechnology/CngTechnology';
import Benefits from './components/technology/cngTechnology/Benefits';
import './styles/bootstrap.scss';
import './styles/globals.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/understanding-cng" exact>
          <CngTechnology />
        </Route>
        <Route path="/technology-benefits" exact>
          <Benefits />
        </Route>
      </Switch>
    </Router>
  );
}
