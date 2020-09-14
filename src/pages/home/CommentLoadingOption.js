import React from 'react';
import './CommentLoadingOption.css';

function CommentLoadingOption({ loadData }) {

  function handleClick() {
    loadData(999999);
  }
  return (
    <div className="comment-box__options">
      <p onClick={handleClick}>View all comments</p>
      
    </div>
  )
}

export default CommentLoadingOption;
