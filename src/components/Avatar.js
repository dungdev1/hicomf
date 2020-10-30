import React from 'react';
import './Avatar.scss';

function Avatar({ name, avatarUrl }) {

  return (
    <img className="Avatar"
      src={avatarUrl}
      alt={name}
    />
  );
}

export default Avatar;
