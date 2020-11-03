import React from 'react';
import PostForm from '../home/PostForm';
import PostList from './PostList';


function ProfilePost({ className }) {
  return (
    <div className={`ProfilePost ${className}`}>
      <PostForm />
      <PostList />
    </div>
  )
}

export default ProfilePost;
