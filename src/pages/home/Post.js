import React from 'react'
import { Avatar } from '@material-ui/core'
import Button from '../../components/Button';
import PostInteraction from './PostInteraction';

import './Post.css';
import PostPhoto from './PostPhoto';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__info">
          <Avatar src={post.owner_pic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{post.owner_name}</h3>
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
      <PostPhoto photos={post.photos} />
      {/* <PostInteraction postID={postID} /> */}
    </div>
  );
}

export default Post;