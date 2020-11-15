import React, { useContext } from 'react';
import Avatar from '../../components/Avatar';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileNavigation from './ProfileNavigation';

import './ProfileHeader.scss';
import { ProfileContext } from '../../contexts/ProfileContext';
import { UserInforContext } from '../../AppRoutes';
import UpdateAvatarButton from './UpdateAvatarButton';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function ProfileHeader() {
  const profile = useContext(ProfileContext);
  const [userInfor, setUserInfor] = useContext(UserInforContext);

  const url = process.env.REACT_APP_SERVER_URL + `/api/v1/photos?profile_id=${profile.profileId}&album=${profile.avatarAlbumId}`;
  const { loading, data: photo } = useApi(url, options);
  let bio = `Btw, SpaceX is no longer planning to upgrade Falcon 9 second 
  stage for reusability. Accelerating BFR instead. New design is very exciting! 
  Delightfully counter-intuitive.`
  let avatarContent;
  if (loading) {
    avatarContent = <div style={{ width: "125px" }}></div>;
  } else {
    if (userInfor.id == profile.profileId) {
      avatarContent = <Avatar name={userInfor.full_name} avatarUrl={userInfor.avatar} />
    } else {
      avatarContent = <Avatar name={profile.data.full_name} avatarUrl={photo.photo_url} />
    }
  }

  return (
    <div className="intro">
      <div className="intro_left">
        {avatarContent}
        {profile.profileId == userInfor.id &&
          <UpdateAvatarButton />
        }
      </div>
      <div className="intro_right">
        <div className="name">
          {profile.data.full_name}
        </div>
        <div className="biography">
          {bio}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;