import React from 'react'
import { Avatar } from '@material-ui/core'
import Button from '../../components/Button';
import PostInteraction from './PostInteraction';

import './Post.css';
import PostPhoto from './PostPhoto';
import TimeAgo from '../../components/TimeAgo';
import Mode from '../../components/Mode';
import PostOwner from './PostOwner';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__info">
          <Avatar src={post.owner_pic} className="post__avatar" />
          <div className="post__topInfo">
            <PostOwner ownerName={post.owner_name} owner_pic={post.owner_pic} profileEndpoint={post.profile} />
            <div className="add__info">
              <TimeAgo time={post.time} style={{fontSize: "14px"}} />
              <Mode mode={"Public"} />
            </div>
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
      {post.photos.length > 0 && <PostPhoto photos={post.photos} />}      
      <PostInteraction
        numLikes={post.num_likes}
        numComments={post.num_comments}
        numShares={post.num_shares}
        postId={post.id}
      />
    </div>
  );
}

export default Post;