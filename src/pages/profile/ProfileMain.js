import React from 'react';
import { Route } from 'react-router-dom';
import ProfileChronicle from './ProfileChronicle';
import ProfileFriend from './ProfileFriend';
import ProfileInformation from './ProfileInformation';
import './ProfileMain.scss';
import ProfilePhoto from './ProfilePhoto';

function ProfileMain({ relativeUrl }) {
  return (
    <div className="ProfileMain">
      <Route exact path={relativeUrl} component={ProfileChronicle} />
      <Route path={relativeUrl + '/information'} component={ProfileInformation} />
      <Route path={relativeUrl + '/friends'} component={ProfileFriend} />
      <Route path={relativeUrl + '/photos'} component={ProfilePhoto} />
    </div>
  );
}

export default ProfileMain;
