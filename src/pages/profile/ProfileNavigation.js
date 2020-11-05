import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileNavigation.scss';

function ProfileNavigation({ relativeUrl }) {
  const pageName = window.location.pathname.split("/").filter(item => item !== "").pop();
  let initialIndex;
  switch (pageName) {
    case "information":
      initialIndex = 1;
      break;
    case "friends":
      initialIndex = 2;
      break;
    case "photos":
      initialIndex = 3;
    default:
      initialIndex = 0;
  }
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  
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
