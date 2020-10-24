import React from 'react'
import { Avatar } from '@material-ui/core'
import Button from '../../components/Button';
import PostInteraction from './PostInteraction';

import './Post.css';
import PostPhoto from './PostPhoto';
import { useApi } from '../../hooks/use-api';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function Post({ post }) {
  // Get information of post owner.
  const { loading, error, data: profile } = useApi(post.profile, options);
  if (profile) {
    console.log(profile);
    return (
      <div className="post">
        <div className="post__top">
          <div className="post__info">
            <Avatar src="" className="post__avatar" />
            <div className="post__topInfo">
              <h3>{profile.full_name}</h3>
              <p>{post.time}</p>
            </div>
          </div>
          <div className="post__setting">
            <Button
              className="button button__setting"
              iconName="more-horiz"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              width="29.401"
              height="6.918"
            />
          </div>
        </div>
        <div className="post__caption">
          <p>{post.caption}</p>
        </div>
        {/* <PostPhoto photos={post.photos} /> */}
        {/* <PostInteraction postID={postID} /> */}
      </div>
    )
  }
  return <></>;
}

export default Post;