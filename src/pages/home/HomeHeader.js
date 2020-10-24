import React from 'react';
import { Link } from "react-router-dom";

import './HomeHeader.css';

import LogoutButton from '../../components/LogoutButton';
import PostButton from './PostButton';

function HomeHeader({ refresh }) {
  return (
    <div className="header">
      <nav>
        {/* <Link to="/">Posts</Link> */}
        <PostButton className={"HeadButton"} refresh={refresh} active={true} />
        <h3 className="HeadButton">Photos</h3>
        <h3 className="HeadButton">Communications</h3>
        <h3 className="HeadButton">Favorites</h3>
        <h3 className="HeadButton">Recommendation</h3>
      </nav>
      <LogoutButton />
    </div>    
  );
}

export default HomeHeader;
