import React from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';
import ProfileHeader from './ProfileHeader';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import './Profile.scss';
import ProfileContextProvider from '../../contexts/ProfileContext';
import ProfileNavigation from './ProfileNavigation';
import ProfileMain from './ProfileMain';

function Profile({ match }) {
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
    data: data,
    avatarAlbumId: partsUrl[partsUrl.length - 2],
    profileId: profileId,
  }
  return (
    <div className="Profile">
      <div className="Profile__left">
        <Sidebar />
      </div>
      <div className="Profile__right">
        <ProfileContextProvider user={user}>
          <ProfileHeader />
          <div className="ProfileBody">
            <ProfileNavigation relativeUrl={match.url} />
            <ProfileMain relativeUrl={match.url} />
          </div>
        </ProfileContextProvider>
      </div>      
    </div>
  );
}

export default Profile;