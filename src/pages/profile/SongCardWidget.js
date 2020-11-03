import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

import './SongCardWidget.scss';

function SongCardWidget({ name, songPic, singer, songLength }) {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="SongCardWidget">
      <Avatar avatarUrl={songPic} name={name} />
      <div className="info">
        <div className="name">
          <a href="">{name}</a>
        </div>
        <div className="additional__info">
          {singer}
        </div>
      </div>
      <div className="song__length">
        {songLength}
      </div>
      <div className="buttons">
        <Button
          iconName="play"
          fill="#d3d8e0"
          stroke="#d3d8e0"
          width="17.906" 
          height="23"
          className="button play__button"
        />
        {!isAdded
          ? (<Button
            iconName="add"
            fill="#d3d8e0"
            stroke="#d3d8e0"
            width="22"
            height="22"
            className="button add__button"
          />)
          : (<Button
            iconName="verify"
            fill="#d3d8e0"
            stroke="#d3d8e0"
            width="20.573"
            height="18.821"
            className="button verify__button"
          />)}
      </div>
    </div>
  );
}

export default SongCardWidget;