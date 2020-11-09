import React from 'react';

import MessageSender from './MessageSender';
import Post from './Post';

import './Feed.css';
import Spinner from '../../components/Spinner';

function Feed({ status, error, posts }) {
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.time.localeCompare(a.date));

  let content;
  if (status === 'loading') {
    content = <Spinner active={true} />
  } else if (error) {
    content = <div>Oops... {error.message}</div>
  } else {
    content = (
      <div className="feed">
        <MessageSender />
        <div className="posts">
          {orderedPosts.map(post => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="Feed">
      {content}
    </div>
  );
}

export default Feed;
