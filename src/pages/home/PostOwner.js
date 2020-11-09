import { useAuth0 } from '@auth0/auth0-react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import SVGIcon from '../../components/SVGIcon';

import './PostOwner.scss';

function PostOwner({ ownerName, postId, profileEndpoint }) {
  const { getAccessTokenSilently } = useAuth0();
  const [isShown, setIsShown] = useState(false);
  const [state, setState] = useState({
    error: null,
    loadng: true,
    profileInfo: {}
  });

  const nameList = profileEndpoint.split("/").filter(item => item !== "");


  useEffect(() => {
    if (isShown && Object.keys(state["profileInfo"]).length === 0) {

      (async () => {
        try {
          const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
          const accessToken = await getAccessTokenSilently({ audience });
          const res = await fetch(profileEndpoint, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          });
          if (res.ok) {
            const data = await res.json();
            setState({
              ...state,
              profileInfo: data,
              error: null,
              loading: false
            });
          } else if (res.status === 404) {
            throw new Error("404 Not Found!");
          }
        } catch (error) {
          setState({
            ...state,
            error,
            loading: false
          });
        }
      })();
    }
  })

  if (state["loading"]) {
    return <Spinner active={true} />;
  } else if (state["error"]) {
    return "Opps...Something wrongs";
  }
  const profileInfo = state["profileInfo"];

  const summaryContent = (
    <>
      <div className="basicInfor row">
        <div className="col-3">
          <Avatar name={profileInfo.full_name} avatarUrl={profileInfo.avatarUrl} />
        </div>
        <div className="col-9">
          <h3>{profileInfo.full_name}</h3>
          <div>
            <SVGIcon
              name="work"
              fill="#454545"
              width="19"
              height="16" />
            <p>Here is Work description</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#454545" }} />
            <p>Here is Relationship description</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="info_button messageButton">
          <Button
            className="button message__button"
            iconName="message"
            fill="#000"
            stroke="#454545"
            width="17.901"
            height="16.078" />
          <p>Message</p>
        </div>
        <div className="info_button friendButton">
          <Button
            className="button friend__button"
            iconName="friend"
            fill="#000"
            stroke="#454545"
            width="15.265"
            height="15.265" />
        </div>
        <div className="info_button settingButton">
          <Button
            className="button button__setting"
            iconName="more-horiz"
            fill="#000"
            width="19.6"
            height="4.612" />
        </div>
      </div>
    </>
  );

  return (
    <div
      className='PostOwner tooltip'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <a href={`${window.location.href}profiles/${nameList[nameList.length - 1]}`}>
        {ownerName}
      </a>
      <div className="summary-box tooltiptext">
        {summaryContent}
      </div>
    </div>
  )
}

export default PostOwner;