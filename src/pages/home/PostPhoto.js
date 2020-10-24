import React from 'react';

function PostPhoto({ imageUrl }) {
  return (
    <div className="PostPhoto">
      <img src={imageUrl} alt="post image" />
    </div>
  );
}

export default PostPhoto;