import React from 'react';
import ReelStory from './ReelStory';
import Event from './Event';

import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <ReelStory />
      <Event />
      {/* <FriendRequest /> */}
    </div>
  )
}

export default Widgets;
