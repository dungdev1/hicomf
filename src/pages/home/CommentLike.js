import React from 'react';
import Button from '../../components/Button';

import './CommentLike.css';

function CommentLike() {
  return (
    <div className="comment-like">
      <Button 
        className="button button__like"
        iconName="thumb-up"
        fill="#D3D8E0"
        stroke="#D3D8E0"
        strokeWidth="0.5"
        width="16.07"
        height="14.28"
      />
      <div className="num-likes">
        931
      </div>
    </div>
  )
}

export default CommentLike
