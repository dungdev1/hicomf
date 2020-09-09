import React, { useState, useEffect } from 'react';
import MessageSender from './MessageSender';
import Post from './Post';

import db from '../../lib/firebase';

import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  console.log(posts);

  return (
    <div className="feed">
      <MessageSender />
      <div className="posts">
        {posts && posts.map(post => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
            caption={post.data.caption}
            numLike={post.data.numLike}
            numComment={post.data.numComment}
            numShare={post.data.numShare}
          />
        ))};
      </div>
    </div>
  )
}

export default Feed;
