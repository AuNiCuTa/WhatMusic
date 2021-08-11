/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ArtistList from '../results/ArtistList';
import ReleaseList from '../releases/ReleaseList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={ArtistList} />

        <Route exact path="/artist/:id" component={ReleaseList} />

        <Route exact path="/releases/:id" />

        <Route exact path="/recordings/:id" />

        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}
