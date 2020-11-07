import React, { createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useAuth0 } from "@auth0/auth0-react";
import SinglePostPage from "./pages/home/SinglePostPage";
import Profile from "./pages/profile/Profile";
import LoadingBar from "./components/LoadingBar";
import { useApi } from "./hooks/use-api";

export const UserContext = createContext();

export default function AppRoutes(props) {
  const { isLoading, error, user, getAccessTokenSilently } = useAuth0();

  const url = process.env.REACT_APP_SERVER_URL + '/api/v1/user/';
  const { loading, userError, data:userInfor } = useApi(url, {
    audience: process.env.REACT_APP_AUTH0_AUDIENCE
  });
  
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

  if (isLoading || loading) {
    return <LoadingBar active={true} />;
  }
  if (error || userError) {
    return <div>Oops... {error.message}</div>
  }
  return (
    <Router>
      <Switch>
        {user 
        ? <AuthenticatedAppRoutes user={user} userInfor={userInfor} /> 
        : <UnAuthenticatedAppRoutes />}
      </Switch>
    </Router>
  );
};

const UnAuthenticatedAppRoutes = () => {
  console.log("UnAuthenticated App Route");
  return (
    <>
      <Route exact path="/">
        <Login />
      </Route>
      <Redirect to="/" />
    </>
  );
}

const AuthenticatedAppRoutes = ({ user, userInfor }) => {
  const { pathname } = useLocation();
  const nameList = pathname.split("/").filter(item => item !== "");
  if (pathname !== "/" && (nameList.length === 1 || !["posts", "profiles"].includes(nameList[0]))) {
    return <Redirect to="/" />;
  }
  return (
    <UserContext.Provider value={userInfor || user}>
      <Route exact path="/" component={Home} />
      <Route path="/posts/:postId" component={SinglePostPage} />
      <Route path='/profiles/:profileId' component={Profile} />
    </UserContext.Provider>
  );
}