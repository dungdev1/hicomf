import { Avatar } from '@material-ui/core'
import React from 'react';

import './Comment.css';

import CommentLike from './CommentLike';
import CommentReply from './CommentReply';

function Comment({ userInfo, time, content }) {
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__avatar">
          <Avatar src={userInfo.photoURL} />
        </div>
        <div className="comment__info">
          <div className="comment__author">
            <p>{userInfo.displayName}</p>
          </div>
          <div className="comment__metadata">
            <p>{new Date(time?.toDate()).toUTCString()}</p>
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
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Comment;
