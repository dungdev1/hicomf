import React from 'react';
import PostForm from '../home/PostForm';
import PostList from './PostList';


function ProfilePost({ user, className }) {
  return (
    <div className={`ProfilePost ${className}`}>
      <PostForm />
      <PostList user={user} />
    </div>
  )
}

export default ProfilePost;
