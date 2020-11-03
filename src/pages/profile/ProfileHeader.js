import React, { useContext } from 'react';
import Avatar from '../../components/Avatar';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileNavigation from './ProfileNavigation';

import './ProfileHeader.scss';
import { ProfileContext } from '../../contexts/ProfileContext';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function ProfileHeader() {
  const user = useContext(ProfileContext);

  const url = process.env.REACT_APP_SERVER_URL + `/api/v1/photos?profile_id=${user.profileId}&album=${user.avatarAlbumId}`;
  const { loading, data: photo } = useApi(url, options);
  let bio = `Btw, SpaceX is no longer planning to upgrade Falcon 9 second 
  stage for reusability. Accelerating BFR instead. New design is very exciting! 
  Delightfully counter-intuitive.`
  let avatarContent;
  if (loading) {
    avatarContent = <Spinner active={true} />;
  } else {
    avatarContent = <Avatar name={user.data.full_name} avatarUrl={photo.photo_url} />
  }

  return (
    <div className="intro">
      <div className="intro_left">
        {avatarContent}
      </div>
      <div className="intro_right">
        <div className="name">
          {user.data.full_name}
        </div>
        <div className="biography">
          {bio}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;