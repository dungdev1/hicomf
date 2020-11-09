import React, { useState } from 'react';
import Like from './Like';
import CommentButton from './CommentButton';
import CommentBox from './CommentBox';
import Share from './Share';

import './PostInteraction.css';

function PostInteraction({ likesUrl, commentsUrl, sharesUrl, numLikes, numComments, numShares, postId }) {
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
            commentsUrl={commentsUrl}
            onOpenCommenBoxChange={handleOpenCommentBox}  />
        </div>   
        <div className="post__option">
          <Share 
            sharesUrl={sharesUrl}
            numShares={numShares}            
          />
        </div>
      </div>
      {/* {isOpenCommentBox && 
        <CommentBox postID={props.postID} />
      } */}
    </div>
  )
}

export default PostInteraction;