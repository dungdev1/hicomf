import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';

function Profile() {
  let { userId } = useParams();
  url = location.protocol + '//' + location.hostname + '/api/v1/profiles/'


  const { loading, error, data , refresh } = useApi(url, {
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  });

  if (loading) {
    <Spinner active={true} />
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }
  const user = {
    name: data.first_name + data.last_name,
    bio: data.bio,
  }
  return (
    <div className="Profile">
      <ProfileHeader user={user} profile={url} />
      <ProfileBody />
    </div>
  )
}

export default Profile;