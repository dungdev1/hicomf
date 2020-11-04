import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileNavigation.scss';

function ProfileNavigation({ relativeUrl }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => setActiveIndex(index);

  return (
    <div className="ProfileNavigation">
      <Link 
        to={relativeUrl} 
        onClick={() => handleClick(0)} 
        className={activeIndex===0 && "active"}
      >
        Chronicle
      </Link>
      <Link 
        to={relativeUrl + '/information'} 
        onClick={() => handleClick(1)} 
        className={activeIndex===1 && "active"}
      >
        Information
      </Link>
      <Link 
        to={relativeUrl + '/friends'} 
        onClick={() => handleClick(2)} 
        className={activeIndex===2 && "active"}
        >
          Friends
        </Link>
      <Link 
        to={relativeUrl + '/photos'} 
        onClick={() => handleClick(3)} 
        className={activeIndex===3 && "active"}
      >
        Photo
      </Link>
      <a>More</a>
    </div>
  );
}

export default ProfileNavigation
