import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useAuth0 } from "@auth0/auth0-react";
import SinglePostPage from "./pages/home/SinglePostPage";
import LoadingBar from "./components/LoadingBar";

export default function AppRoutes(props) {
  const { isLoading, error, user } = useAuth0();
  if (isLoading) {
    return <LoadingBar active={true} />
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return (
    <Router>
      <Switch>
        {user ? <AuthenticatedAppRoutes /> : <UnAuthenticatedAppRoutes />}
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
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/:postId" component={SinglePostPage} />
    </>
  );
}