import React from 'react';
import ProfileMain from './ProfileMain';
import ProfileNavigation from './ProfileNavigation';

function ProfileBody() {
  return (
    <div className="ProfileBody">
      <ProfileNavigation />
      <ProfileMain />
    </div>
  )
}

export default ProfileBody;