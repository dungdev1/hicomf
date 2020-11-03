import React from 'react';
import MainWidget from './MainWidget';
import ProfileStatistic from './ProfileStatistic';

function ProfileWidgets({ className }) {
  return (
    <div className={`ProfileWidgets ${className}`}>
      <ProfileStatistic />
      <MainWidget />
    </div>
  );
}

export default ProfileWidgets;