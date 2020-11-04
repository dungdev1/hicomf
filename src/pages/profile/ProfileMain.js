import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { ProfileContext } from '../../contexts/ProfileContext';
import ProfileChronicle from './ProfileChronicle';
import ProfileFriend from './ProfileFriend';
import ProfileInformation from './ProfileInformation';
import './ProfileMain.scss';
import ProfilePhoto from './ProfilePhoto';

function ProfileMain() {
  const user = useContext(ProfileContext);
  return (
    <div className="ProfileMain">
      <Route exact path={`/profiles/${user.profileId}/`} component={ProfileChronicle} />
      <Route exact path={`/profiles/${user.profileId}/information/`} component={ProfileInformation} />
      <Route exact path={`/profiles/${user.profileId}/friends/`} component={ProfileFriend} />
      <Route exact path={`/profiles/${user.profileId}/photos/`} component={ProfilePhoto} />
    </div>
  );
}

export default ProfileMain;
