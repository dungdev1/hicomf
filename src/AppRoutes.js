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
import Profile from "./pages/profile/Profile";
import LoadingBar from "./components/LoadingBar";

export default function AppRoutes(props) {
  const { isLoading, error, user, getAccessTokenSilently } = useAuth0();

  if (user && user['https://myapp.example.com/is_new']) {
    const profileData = {
      'first_name': user.given_name,
      'last_name': user.family_name,
      'email': user.email,
      'user_avatar': user.picture,
    }
    const url = process.env.REACT_APP_SERVER_URL + '/api/v1/profiles/';
    let options = {
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    (async () => {
      try {
        const { audience, scope, ...fetchOptions } = options;
        const accessToken = await getAccessTokenSilently({ audience, scope });
        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(await res.json());
      } catch (error) {
        console.error(error.message);
      }
    })();
  };

  if (isLoading) {
    return <LoadingBar active={true} />;
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
      <Route path="/posts/:postId" component={SinglePostPage} />
      <Route path='/profiles/:profileId' component={Profile} />
    </>
  );
}