import React, { useEffect, useState } from 'react';

import './CommentBox.css';

import Comment from './Comment';
import db from '../../lib/firebase';
import CommentInput from './CommentInput';
import CommentLoadingOption from './CommentLoadingOption';
import { useFetch } from '../../hooks/useFetch';

function CommentBox({ postID }) {
  const [isAllowLoad, setIsAllowLoad] = useState(true);
  const [comments, setComments, isLoaded] = useFetch(`posts/${postID}/comments`, 2, isAllowLoad, setIsAllowLoad);
  return (
    <>
      {!isLoaded
        ? <div className="loader"></div>
        : (
          <div className="comment-box">
            <CommentLoadingOption 
              postID={postID}
              onSetCommentsChange={setComments} />
            <CommentInput postID={postID} />
            <div className="comment-box__comments">
              {comments.map(comment => (
                <Comment
                  key={comment.id}
                  userInfo={comment.userData}
                  time={comment.timestamp}
                  content={comment.content} />
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}

export default CommentBox;
