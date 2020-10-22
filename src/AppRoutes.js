import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "./components/Wrapper";
import Profile from "./pages/profile/Profile";

export default function AppRoutes(props) {
  const { user } = useAuth0();
  return (
    <Router>
      <Switch>
        {user ? (
          <AuthenticatedAppRoutes />
        ) : (
            <Wrapper>
              <UnAuthenticatedAppRoutes />
            </Wrapper>
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
      <Route exact path="/:userId">
        <Profile />
      </Route>
    </>
  );
}