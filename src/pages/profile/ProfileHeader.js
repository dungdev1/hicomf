import React from 'react';
import Avatar from '../../components/Avatar';

function ProfileHeader(props) {
  
  return (
    <div className="intro">
      <div className="intro_left">
        <Avatar user={props.user} profile={props.profile} />
      </div>
      <div className="intro-right">
        <div className="name">
          {props.user.name}
        </div>
        <div className="biography">
          {props.user.bio}
        </div>
      </div>      
    </div>
  );
}

export default ProfileHeader;