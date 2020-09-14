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
      .onSnapshot(function(querySnapshot) {
        let allPosts = [];
        querySnapshot.docs.forEach((doc, index) => {
          const post = doc.data();
          post.id = doc.id;
          post.user.get()
            .then(doc => doc.data())
            .then(userData => { post.userData = userData; })
            .then(() => {
              allPosts.push(post);
              if (index === querySnapshot.docs.length - 1) {
                setPosts(allPosts);
              }
            })
        });
      });
  }, []);

  return (
    <div className="feed">
      <MessageSender />
      <div className="posts">
        {posts.map(post => (
          <Post
            key={post.id}
            postID={post.id}
            profilePic={post.userData.photoURL}
            image={post.image}
            username={post.userData.displayName}
            timestamp={post.timestamp}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed;
