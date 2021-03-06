import { useAuth0 } from '@auth0/auth0-react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import SVGIcon from '../../components/SVGIcon';

import './PostOwner.scss';

function PostOwner({ ownerName, owner_pic, profileEndpoint }) {
  const { getAccessTokenSilently } = useAuth0();
  const [isShown, setIsShown] = useState(false);
  const [state, setState] = useState({
    error: null,
    loading: true,
    profileInfo: {}
  });
  let history = useHistory();

  const nameList = profileEndpoint.split("/").filter(item => item !== "");


  useEffect(() => {
    let mounted = true;
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
            if (mounted) {
              
              setState({
                ...state,
                profileInfo: data,
                error: null,
                loading: false
              });
            }
          } else if (res.status === 404) {
            throw new Error("404 Not Found!");
          }
        } catch (error) {
          if (mounted) {
            setState({
              ...state,
              error,
              loading: false
            });
          }
        }
      })();
    }
    return () => mounted = false;
  })

  const redirectHandler = () => {
    history.push(`/profiles/${nameList[nameList.length - 1]}`);
  }

  let summaryContent;

  if (state["loading"]) {
    summaryContent = <Spinner active={true} />;
  } else if (state["error"]) {
    summaryContent = "Opps...Something wrongs";
  } else {
    const profileInfo = state["profileInfo"];

    summaryContent = (
      <>
        <div className="basicInfor row">
          <div className="col-3">
            <Avatar name={profileInfo.full_name} avatarUrl={owner_pic} />
          </div>
          <div className="col-9">
            <h3 onClick={redirectHandler}>
              {profileInfo.full_name}
            </h3>
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
  }

  return (
    <div
      className='PostOwner tooltip'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <h3
        onClick={redirectHandler}
      >
        {ownerName}
      </h3>
      {/* <a href={`${window.location.href}profiles/${nameList[nameList.length - 1]}`}>
        {ownerName}
      </a> */}
      <div className="summary-box tooltiptext">
        {summaryContent}
      </div>
    </div>
  )
}

export default PostOwner;