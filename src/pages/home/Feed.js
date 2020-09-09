import React from 'react';
import MessageSender from './MessageSender';
import Post from './Post';

import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <MessageSender />
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed
