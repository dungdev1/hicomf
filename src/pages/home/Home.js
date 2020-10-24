import React from 'react';
import HomeHeader from './HomeHeader';
import Sidebar from '../../components/Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import { useApi } from '../../hooks/use-api';

import './Home.css';

const url = process.env.REACT_APP_SERVER_URL + '/api/v1/posts/';
const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function Home() {
  const { loading, error, refresh, data: posts } = useApi(url, options);

  return (
    <div className="home">
      <div className="home__left">
        <Sidebar />
      </div>
      <div className="home__right">
        <HomeHeader refresh={refresh} />
        <div className="home__main row">
          <Feed loading={loading} error={error} posts={posts} />
          <Widgets />
        </div>        
      </div>
      
    </div>
  )
}

export default Home;
