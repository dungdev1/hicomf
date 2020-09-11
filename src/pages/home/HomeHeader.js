import React from 'react';

import './HomeHeader.css';

import LogoutButton from '../../components/LogoutButton';

function HomeHeader() {
  return (
    <div className="header">
      <nav>
        <h3>Posts</h3>
        <h3>Photos</h3>
        <h3>Communications</h3>
        <h3>Favorites</h3>
        <h3>Recommendation</h3>
      </nav>
      <LogoutButton />
    </div>    
  );
}

export default HomeHeader;
