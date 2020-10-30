import React from 'react';
import ProfileMain from './ProfileMain';
import ProfileNavigation from './ProfileNavigation';

function ProfileBody(props) {
  return (
    <div className="ProfileBody">
      <ProfileNavigation />
      <ProfileMain user={props.user} />
    </div>
  )
}

export default ProfileBody;