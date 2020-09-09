import React from 'react';
import AvatarStory from './AvatarStory';
import AddingStory from './AddingStory';

import './ReelStory.css';

function ReelStory() {
  return (
    <div className="reelStory">
      <h3>Story</h3>
      <div className="stories">
        <AddingStory />
        <AvatarStory  />
        <AvatarStory />
        <AvatarStory />
      </div>      
    </div>
  );
}

export default ReelStory;
