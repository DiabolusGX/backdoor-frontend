import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing/Landing';
import Signup from './screens/Signup/Signup';
import Threads from './screens/Threads/Threads';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { checkAuthenticated } from './api/index';
import { authenticate, setUsername, setPermissionLevel } from './store/userSlice';
import { useDispatch } from 'react-redux';
import './App.scss';
import './scss/ReactToastify.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuthenticated()
      .then(res => {
        dispatch(authenticate());
        dispatch(setUsername(res.data.username));
        dispatch(setPermissionLevel(res.data.permissionLevel));
      })
      .catch(err => {
      })
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/threads">
          <Threads />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
