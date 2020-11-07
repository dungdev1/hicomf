import React, { useEffect, useRef, useState } from 'react';
import HomeHeader from './HomeHeader';
import Sidebar from '../../components/Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import { useApi } from '../../hooks/use-api';

import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchPosts, selectAllPosts } from './postsSlice';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Home() {
  // const { loading, error, refresh, data: posts } = useApi(url, options);
  const { audience, scope } = options;
  const [refreshIndex, setRefreshIndex] = useState(0);

  const { getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    (async () => {
      if (postStatus === 'idle') {
        const accessToken = await getAccessTokenSilently({audience, scope});
        dispatch(fetchPosts(accessToken));
      }      
    })();
  }, [postStatus, dispatch]);

  const refresh = () => setRefreshIndex(refreshIndex + 1);

  return (
    <div className="home">
      <div className="home__left">
        <Sidebar />
      </div>
      <div className="home__right">
        <HomeHeader refresh={refresh} />
        <div className="home__main row">
          <Feed status={postStatus} error={error} posts={posts} />
          <Widgets />
        </div>        
      </div>      
    </div>
  )
}

export default Home;
