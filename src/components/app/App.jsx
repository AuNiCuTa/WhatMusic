/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ArtistList from '../results/ArtistList';
import ReleaseList from '../releases/ReleaseList';

export default function App() {
  return (
    <Router>

      <Switch>
        <Route exact to="/" render={
          routerProps => <ArtistList {...routerProps} />
        } />

        <Route exact to="/artist/:id" render={routerProps => <ReleaseList {...routerProps} />} />

        <Route exact to="/releases/:id" />

        <Route exact to="/recordings/:id" />

        <Redirect to="/" />
      </Switch>

    </Router>
  );
}
