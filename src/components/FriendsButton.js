import React from 'react';
import Button from './Button';

function FriendsButton() {

  return (
    <div className="FriendButton">
      <Button
        iconName="friend"
        fill="#d3d8e0"
        stroke="#d3d8e0"
        strokeWidth="0.6"
        width="19.45" 
        height="19.45"
        className="button friend__button"
      />
    </div>
  )
}

export default FriendsButton;
