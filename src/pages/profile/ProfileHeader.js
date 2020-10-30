import React from 'react';
import Avatar from '../../components/Avatar';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileNavigation from './ProfileNavigation';

import './ProfileHeader.scss';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function ProfileHeader({ name, bio, profileId, avatarAlbumId }) {
  const url = process.env.REACT_APP_SERVER_URL + `/api/v1/photos?profile_id=${profileId}&album=${avatarAlbumId}`;
  const { loading, data: photo } = useApi(url, options);
  bio = `Btw, SpaceX is no longer planning to upgrade Falcon 9 second 
  stage for reusability. Accelerating BFR instead. New design is very exciting! 
  Delightfully counter-intuitive.`
  let avatarContent;
  if (loading) {
    avatarContent = <Spinner active={true} />;
  } else {
    avatarContent = <Avatar name={name} avatarUrl={photo.photo_url} />
  }

  return (
    <div className="intro">
      <div className="intro_left">
        {avatarContent}
      </div>
      <div className="intro_right">
        <div className="name">
          {name}
        </div>
        <div className="biography">
          {bio}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;