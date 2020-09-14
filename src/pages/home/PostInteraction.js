import React, { useState } from 'react';
import Like from './Like';
import CommentButton from './CommentButton';
import CommentBox from './CommentBox';
import Share from './Share';

import './PostInteraction.css';

const convertNum = (num) => {
  if (num > 1000000) {
    return num / 100000 + "M";
  }
  else if (num > 1000) {
    return num / 1000 + "k";
  }
  else {
    return num;
  }
};

function PostInteraction(props) {
  const [isOpenCommentBox, setIsOpenCommentBox] = useState(false);

  function handleOpenCommentBox() {
    setIsOpenCommentBox(true);
  }

  return (
    <div className="post__interact">
      <div className="post__options">
        <div className="post__option">
          <Like postID={props.postID} convertNum={convertNum} />
        </div>
        <div className="post__option">
          <CommentButton 
            postID={props.postID} 
            convertNum={convertNum}
            onOpenCommenBoxChange={handleOpenCommentBox}  />
        </div>   
        <div className="post__option">
          <Share />
        </div>
      </div>
      {isOpenCommentBox && 
        <CommentBox postID={props.postID} />
      }
    </div>
  )
}

export default PostInteraction;