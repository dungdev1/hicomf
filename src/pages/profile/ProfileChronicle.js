import React from 'react';
import ProfileImage from './ProfileImage';
import ProfilePost from './ProfilePost';
import ProfileWidgets from './ProfileWidgets';


function ProfileChronicle() {
  return (
    <div className="ProfileChronicle">
      <ProfileImage />
      <div className="ChronicleMain row">
        <ProfilePost className="col-8" />
        <ProfileWidgets className="col-4" />
      </div>
    </div>
  )
}

export default ProfileChronicle;