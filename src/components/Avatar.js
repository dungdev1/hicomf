import React, { useEffect } from 'react';

function Avatar(props) {
  useEffect(() => {
    // Fetch profile Pic
  });

  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default Avatar;
