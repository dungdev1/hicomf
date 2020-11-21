import React, { useState } from 'react';
import Like from './Like';
import CommentButton from './CommentButton';
import CommentBox from './CommentBox';
import Share from './Share';

import './PostInteraction.css';

function PostInteraction({ numLikes, numComments, numShares, postId }) {
  const [isOpenCommentBox, setIsOpenCommentBox] = useState(false);

  function handleOpenCommentBox() {
    setIsOpenCommentBox(true);
  }

  return (
    <div className="post__interact">
      <div className="post__options">
        <div className="post__option">
          <Like numLikes={numLikes} postId={postId} />
        </div>
        <div className="post__option">
          <CommentButton 
            onOpenCommenBoxChange={handleOpenCommentBox} 
            numComments={numComments}
            postId={postId} />
        </div>   
        <div className="post__option">
          <Share 
            numShares={numShares}            
          />
        </div>
      </div>
      {isOpenCommentBox && 
        <CommentBox postId={postId} />
      }
    </div>
  )
}

export default PostInteraction;