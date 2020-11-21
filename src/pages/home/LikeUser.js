import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import { callApi, convertNum } from '../../utils';

import './LikeUser.scss';

function LikeUser({ postId, likesNumber, style }) {
  const { getAccessTokenSilently } = useAuth0();
  const [isShown, setIsShown] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (isShown && profiles.length === 0) {
      const url = process.env.REACT_APP_SERVER_URL + `/api/v1/profiles?postId=${postId}&content=like`;
      const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE };
      (async () => {
        setProfiles(await callApi(url, options, getAccessTokenSilently));
      })();
    }
  })

  return (
    <div
      className="LikeUser tooltip"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="like-number" style={style} >
        {convertNum(likesNumber)}
      </div>
      {(isShown && profiles.length > 0) 
        && <span className="tooltiptext">{profiles.map(profile => profile.full_name)}</span>
      }
    </div>
  );
}

export default LikeUser;