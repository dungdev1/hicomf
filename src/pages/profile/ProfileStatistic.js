import React from 'react';
import { convertNum } from '../../utils';

import './ProfileStatistic.scss';

function ProfileStatistic() {
  const [numLikes, numFolowers, numFriends, numPosts] = [
    convertNum(739000), convertNum(254000), convertNum(193), convertNum(203)
  ];

  return (
    <div className="ProfileStatistic row">
      <div className="col-3">
        <div className="quantity">{numLikes}</div>
        <div className="data-name">likes</div>
      </div>
      <div className="col-3">
        <div className="quantity">{numFolowers}</div>
        <div className="data-name">folowers</div>
      </div>
      <div className="col-3">
        <div className="quantity">{numFriends}</div>
        <div className="data-name">friends</div>
      </div>
      <div className="col-3">
        <div className="quantity">{numPosts}</div>
        <div className="data-name">posts</div>
      </div>
    </div>
  )
}

export default ProfileStatistic
