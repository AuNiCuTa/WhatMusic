import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact to="/" />
      </Switch>
    </Router>
  );
}
