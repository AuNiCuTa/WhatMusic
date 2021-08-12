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
import styles from './app.css';
import RecordingsList from '../recordings/RecordingsList';

export default function App() {
  return (
    <main className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/home" component={ArtistList} />
          <Route exact path="/artist/:id" component={ReleaseList} />
          <Route exact path="/releases/:id" component={RecordingsList} />
          <Route exact path="/recordings/:id" render={() =>
            <p>no lyrics currently available</p>} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </main>
  );
}
