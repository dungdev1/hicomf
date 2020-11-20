import React, { useContext } from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import Post from '../home/Post';
import SearchBar from './SearchBar';

import './PostList.scss';
import { ProfileContext } from '../../contexts/ProfileContext';
import { useSelector } from 'react-redux';
import { selectPostsByUser } from '../home/postsSlice';

function PostList() {
  const user = useContext(ProfileContext);
  const posts = useSelector(state => selectPostsByUser(state, user.profileId));

  if (posts) {
    return (
      <div className="PostList">
        <div className="PostSearchBar">
          <h3>Publications</h3>
          <SearchBar />
        </div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}

export default PostList;