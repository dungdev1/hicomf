import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Widgets from '../../components/Widgets';
import Feed from './Feed';
import MessageSender from './MessageSender';
import Post from './Post';
import ReelStory from './ReelStory';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <Sidebar />
      </div>
      <div className="home__right">
        <Header />      
        <Feed />
      </div>
      
    </div>
  )
}

export default Home;
