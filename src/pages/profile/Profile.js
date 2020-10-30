import React from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import './Profile.scss';

function Profile() {
  let { profileId } = useParams();
  const url = process.env.REACT_APP_SERVER_URL + '/api/v1/profiles/' + profileId + '/';

  const { loading, error, data , refresh } = useApi(url, {
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  });

  if (loading) {
    return <Spinner active={true} />;
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  let partsUrl = data.albums[0].split("/");
  const user = {
    name: data.full_name,
    avatarAlbumId: partsUrl[partsUrl.length - 2],
    bio: data.bio,
    profileId: profileId,
  }
  return (
    <div className="Profile">
      <div className="Profile__left">
        <Sidebar />
      </div>
      <div className="Profile__right">
        <ProfileHeader {...user} />
        <ProfileBody user={user} />
      </div>      
    </div>
  );
}

export default Profile;