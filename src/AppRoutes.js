import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { AuthContext } from './contexts/AuthContext';
import { actionTypes } from './reducers/authReducer';

import { auth, provider } from './lib/firebase';
import firebase from 'firebase';

export default function AppRoutes(props) {
  const [{ user }, dispatch] = useContext(AuthContext);
  if (!user || (Object.keys(user).length === 0 && user.constructor === Object)) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user
        });
      }
    });
  }
  // const user = true;
  return (
    <Router>
      <Switch>
        {user ? (
          <AuthenticatedAppRoutes />
        ) : (
            <UnAuthenticatedAppRoutes />
          )}
      </Switch>
    </Router>
  );
};

const UnAuthenticatedAppRoutes = () => {
  return (
    <>
      <Route exact path="/">
        <Login />
      </Route>
    </>
  );
}

const AuthenticatedAppRoutes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}