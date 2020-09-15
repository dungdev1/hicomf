import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './CommentLoadingOption.css';

function CommentLoadingOption({ postID, onSetCommentsChange }) {
  const [isAllowLoad, setIsAllowLoad] = useState(false);
  const [comments, , isLoaded] = useFetch(`posts/${postID}/comments`, 10000, isAllowLoad, setIsAllowLoad);
  
  if (isLoaded) {
    onSetCommentsChange(comments);
  }

  function handleClick() {
    setIsAllowLoad(true);
  }
  console.log(isAllowLoad, isLoaded);    
  return (
    <div className="comment-box__options">
      <p onClick={handleClick}>View all comments</p>
      { (isAllowLoad && !isLoaded ) &&
        <div className="loader"></div>
      }
    </div>
  )
}

export default CommentLoadingOption;
