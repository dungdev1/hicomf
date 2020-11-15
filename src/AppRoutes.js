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
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./pages/home/postsSlice";

export const UserInforContext = createContext();

export default function AppRoutes({ user, getAccessTokenSilently }) {
  const [userInfor, setUserInfor] = useState({});

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
            setUserInfor(data);
          } else if (res.status === 404) {
            throw new Error("404 Not Found!");
          }
        } catch (error) {

        }
      })();
    }
  }, []);

  if (user && Object.keys(userInfor).length === 0) {
    return <LoadingBar active={true} />;
  }

  return (
    <Router>
      <Switch>
        {userInfor
          ? <AuthenticatedAppRoutes 
              userInfor={userInfor} 
              setUserInfor={setUserInfor}
              getAccessTokenSilently={getAccessTokenSilently} />
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

const AuthenticatedAppRoutes = ({ userInfor, setUserInfor, getAccessTokenSilently }) => {
  const { pathname } = useLocation();
  const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }
  const { audience, scope } = options;

  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.posts.status);

  useEffect(() => {
    (async () => {
      if (postStatus === 'idle') {
        const accessToken = await getAccessTokenSilently({audience, scope});
        dispatch(fetchPosts(accessToken));
      }      
    })();
  }, [postStatus, dispatch]);

  const nameList = pathname.split("/").filter(item => item !== "");
  if (pathname !== "/" && (nameList.length === 1 || !["posts", "profiles"].includes(nameList[0]))) {
    return <Redirect to="/" />;
  }

  return (
    <UserInforContext.Provider value={[userInfor, setUserInfor]}>
      <Route exact path="/" component={Home} />
      <Route path="/posts/:postId" component={SinglePostPage} />
      <Route path='/profiles/:profileId' component={Profile} />
    </UserInforContext.Provider>
  );
}