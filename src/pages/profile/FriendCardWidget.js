import React from 'react';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

function FriendCardWidget({ name, avatarPic, company }) {
  return (
    <div className="FriendCardWidget">
      <Avatar avatarUrl={avatarPic} name={name} />
      <div className="info">
        <div className="name">
          <a href="">{name}</a>
        </div>
        <div className="additional__info">
          {company}
        </div>
      </div>
      <div className="buttons">
        <Button
          iconName="message"
          fill="#d3d8e0"
          stroke="#d3d8e0"
          strokeWidth="0.6"
          width="26.853"
          height="24.117"
          className="button message"
        />
        <Button
          iconName="more-vertical"
          fill="#d3d8e0"
          stroke="#d3d8e0"
          width="5.558"
          height="23.62"
          className="button"
        />
      </div>
    </div>
  )
}

export default FriendCardWidget;