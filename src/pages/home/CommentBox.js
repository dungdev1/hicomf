import React from 'react';

import './CommentBox.css';

import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentLoadingOption from './CommentLoadingOption';
import { useSelector } from 'react-redux';
import { selectCommentByPost } from './commentsSlice';


function CommentBox({ postId }) {
  const comments = useSelector(state => selectCommentByPost(state, postId));
  const error = useSelector(state => state.comments.error);
  const commentStatus = useSelector(state => state.comments.status);

  if (commentStatus === 'loading') {
    return <div className="loader"></div>;
  } else if (commentStatus === 'failed') {
    return <div>Opps... {error}</div>
  } else {
    return (
      <div className="comment-box">
        <CommentLoadingOption
          postId={postId} />
        <CommentInput postId={postId} />
        <div className="comment-box__comments">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommentBox;
