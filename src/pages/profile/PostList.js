import React from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import Post from '../home/Post';
import SearchBar from './SearchBar';

import './PostList.scss';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function PostList({ user }) {
  const url = process.env.REACT_APP_SERVER_URL + `/api/v1/posts?profile_id=${user.profileId}`;

  const { loading, error, data: posts } = useApi(url, options);

  if (loading) {
    return <Spinner active={true} />
  } else if (error) {
    return <div>Oops... {error.message}</div>;
  } else {
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
  }
}

export default PostList;