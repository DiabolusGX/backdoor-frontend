import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing/Landing';
import Signup from './screens/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import './scss/ReactToastify.scss';

function App() {
  return (
    <>
      <ToastContainer />
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
