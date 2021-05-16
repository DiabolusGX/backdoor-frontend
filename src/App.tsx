import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './screens/Landing/Landing';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
    </Switch>
  );
}

export default App;
