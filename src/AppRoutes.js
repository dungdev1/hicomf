import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SinglePostPage from "./pages/home/SinglePostPage";
import Profile from "./pages/profile/Profile";
import LoadingBar from "./components/LoadingBar";

export const UserContext = createContext();

export default function AppRoutes({ user, getAccessTokenSilently }) {

  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });

  useEffect(() => {
    if (user) {
      (async () => {
        const url = process.env.REACT_APP_SERVER_URL + '/api/v1/user/';
  
        try {
          const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
          const accessToken = await getAccessTokenSilently({ audience });
          const res = await fetch(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            setState({ ...state, data: data, error: null, loading: false });
          } else if (res.status === 404) {
            throw new Error("404 Not Found!");
          }
        } catch (error) {
          setState({ ...state, error, loading: false });
        }
      })();
    }
  }, []);

  if (state.loading && user) {
    return <LoadingBar active={true} />;
  }
  if (state.error) {
    return <div>Oops... {state.error.message}</div>
  }

  return (
    <Router>
      <Switch>
        {user
          ? <AuthenticatedAppRoutes userInfor={state.data} />
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

const AuthenticatedAppRoutes = ({ userInfor }) => {
  const { pathname } = useLocation();
  const nameList = pathname.split("/").filter(item => item !== "");
  if (pathname !== "/" && (nameList.length === 1 || !["posts", "profiles"].includes(nameList[0]))) {
    return <Redirect to="/" />;
  }
  return (
    <UserContext.Provider value={userInfor}>
      <Route exact path="/" component={Home} />
      <Route path="/posts/:postId" component={SinglePostPage} />
      <Route path='/profiles/:profileId' component={Profile} />
    </UserContext.Provider>
  );
}