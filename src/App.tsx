import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Landing from './screens/Landing/Landing';
import Signup from './screens/Signup/Signup';
import Threads from './screens/Threads/Threads';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { checkAuthenticated } from './api/index';
import { authenticate, setUsername, setPermissionLevel } from './store/userSlice';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import './scss/ReactToastify.scss';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </>
  );
}

export default App;
