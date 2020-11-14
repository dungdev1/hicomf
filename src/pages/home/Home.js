import React, { useEffect } from 'react';
import HomeHeader from './HomeHeader';
import Sidebar from '../../components/Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';

import './Home.css';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

function Home() {
  const posts = useSelector(selectAllPosts);
  const error = useSelector(state => state.posts.error);
  const postStatus = useSelector(state => state.posts.status);

  useEffect(() => {
    document.title = "Hicomf";
  });

  const refresh = () => {};

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
