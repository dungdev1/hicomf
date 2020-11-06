import React from 'react';
import './Avatar.scss';

function Avatar({ style, name, avatarUrl }) {

  return (
    <img className="Avatar"
      src={avatarUrl}
      alt={name}
      style={style}
    />
  );
}

export default Avatar;
