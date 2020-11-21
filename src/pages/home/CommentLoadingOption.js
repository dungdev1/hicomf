import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './CommentLoadingOption.css';

function CommentLoadingOption({ postId }) {

  function handleClick() {
  }
  
  return (
    <div className="comment-box__options">
      <p onClick={handleClick}>View all comments</p>
    </div>
  )
}

export default CommentLoadingOption;
