import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './screens/Landing/Landing';
import Signup from './screens/Signup/Signup';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
