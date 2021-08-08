import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/home/About';
import CngLink1 from './components/technology/cngTechnology/CngLink1';
import CngLink2 from './components/technology/cngTechnology/CngLink2';
import CngLink3 from './components/technology/cngTechnology/CngLink3';
import CngLink4 from './components/technology/cngTechnology/CngLink4';
import CngLink5 from './components/technology/cngTechnology/CngLink5';
import CngLink6 from './components/technology/cngTechnology/CngLink6';
import CngLink7 from './components/technology/cngTechnology/CngLink7';
import CngTechnology from './components/technology/cngTechnology/CngTechnology';
import Benefits from './components/technology/cngTechnology/Benefits';
import Solutions from './components/technology/cngTechnology/Solutions';
import './styles/bootstrap.scss';
import './styles/globals.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/understanding-cng" exact component={CngTechnology} />
        <Route path="/cng-technology-1" exact component={CngLink1} />
        <Route path="/cng-technology-2" exact component={CngLink2} />
        <Route path="/cng-technology-3" exact component={CngLink3} />
        <Route path="/cng-technology-4" exact component={CngLink4} />
        <Route path="/cng-technology-5" exact component={CngLink5} />
        <Route path="/cng-technology-6" exact component={CngLink6} />
        <Route path="/cng-technology-7" exact component={CngLink7} />
        <Route path="/technology-solutions" exact component={Benefits} />
        <Route path="/technology-benefits" exact component={Solutions} />
      </Switch>
    </Router>
  );
}
