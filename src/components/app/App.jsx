import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect 
} from 'react-router-dom';
import ArtistList from '../results/ArtistList';

export default function App() {
  return (
    <Router>

      <Switch>
        <Route exact to="/" render={
          routerProps => <ArtistList {...routerProps} />
        }/>

        <Route exact to="/artists/:id" />

        <Route exact to="/releases/:id" />

        <Route exact to="/recordings/:id" />

        <Redirect to="/" />
      </Switch>
      
    </Router>
  );
}
