import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing/Landing';
import Signup from './screens/Signup/Signup';
import './App.css';
import './components/CustomToastContainer/ReactToastify.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
