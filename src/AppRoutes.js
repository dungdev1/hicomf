import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { AuthContext } from './contexts/AuthContext';

export default function AppRoutes(props)  {
  const [{ user }, ] = useContext(AuthContext);
  // const user = true;
  console.log(user);
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