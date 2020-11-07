import React from 'react';
import MessageSender from '../home/MessageSender';
import MainWidget from './MainWidget';
import PostList from './PostList';
import ProfileImage from './ProfileImage';
import ProfileStatistic from './ProfileStatistic';


function ProfileChronicle() {
  return (
    <div className="ProfileChronicle">
      <ProfileImage />
      <div className="ChronicleMain row">
        <div className="ProfilePost col-8">
          <MessageSender />
          <PostList />
        </div>
        <div className="ProfileWidgets col-4">
          <ProfileStatistic />
          <MainWidget />
        </div>
      </div>
    </div>
  )
}

export default ProfileChronicle;