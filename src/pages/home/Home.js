import React from 'react';
import HomeHeader from './HomeHeader';
import Sidebar from '../../components/Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <Sidebar />
      </div>
      <div className="home__right">
        <HomeHeader />
        <div className="home__main row">
          <Feed />
          <Widgets />
        </div>        
      </div>
      
    </div>
  )
}

export default Home;
