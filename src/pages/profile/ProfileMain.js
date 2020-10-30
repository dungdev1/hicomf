import React from 'react';
import ProfileChronicle from './ProfileChronicle';
import './ProfileMain.scss';

function ProfileMain(props) {
  return (
    <div className="ProfileMain">
      <ProfileChronicle user={props.user} />
    </div>
  )
}

export default ProfileMain;
