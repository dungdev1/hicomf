import React from 'react';
import Avatar from '../../components/Avatar';
import TimeAgo from '../../components/TimeAgo';

import './Comment.css';

import CommentLike from './CommentLike';
import CommentReply from './CommentReply';
import PostOwner from './PostOwner';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment__top">
        <Avatar
          avatarUrl={comment.owner_pic}
          name={comment.owner_name}
          style={{ width: "35px", marginRight: "15px" }} />
        <div className="comment__info">
          <PostOwner ownerName={comment.owner_name} owner_pic={comment.owner_pic} profileEndpoint={comment.profile} />
          <div className="comment__metadata">
            <TimeAgo time={comment.time}
              style={{ fontSize: "13px", fontWeight: 400 }} />
          </div>
        </div>
        <div className="comment__actions">
          <div className="comment__action">
            <CommentLike />
          </div>
          <div className="comment__action">
            <CommentReply />
          </div>
        </div>
      </div>
      <div className="comment__content">
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;
