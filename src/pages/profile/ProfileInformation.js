import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserInforContext } from '../../AppRoutes';
import Avatar from '../../components/Avatar';
import SVGIcon from '../../components/SVGIcon';
import { ProfileContext } from '../../contexts/ProfileContext';
import EditDialog from './EditDialog';

import './ProfileInformation.scss';

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("run handle Click outside");
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

function ProfileInformation() {
  const profile = useContext(ProfileContext);
  const [userInfor, setUserInfor] = useContext(UserInforContext);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="ProfileInformation">
      <EditDialog ref1={ref} isComponentVisible={isComponentVisible} />
      <div className="navigation">
        <div className="active">Overview</div>
        <div>Work & Education</div>
        <div>Details about Elon</div>
        <div>Life events</div>
        {profile.profileId == userInfor.id && (
          <div
            className="editProfile"
            onClick={() => setIsComponentVisible(true)}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faPen} />
            </div>
            Edit Profile
          </div>
        )}
      </div>
      <div className="Overview">
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="birthday-cake"
              width="28.695"
              height="34.774"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              strokeWidth="0.5" />
          </div>
          <div className="infor">
            <div>47 years</div>
            <div>June 28, 1971</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="map-location"
              width="29.25"
              height="34.5"
              fill="#d3d8e0"
              stroke="#d3d8e0" />
          </div>
          <div className="infor">
            <div>Lives in</div>
            <div>Chalon Rd, Los Angeles, CA</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="work"
              width="28.25"
              height="24.5"
              fill="#d3d8e0"
              stroke="#d3d8e0" />
          </div>
          <div className="infor">
            <div>CEO</div>
            <div>SpaceX</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="person"
              width="28.5"
              height="38.5"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              strokeWidth="0.6" />
          </div>
          <div className="infor">
            <div>Relationships</div>
            <div>Single</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="instagram"
              width="29.893"
              height="29.893"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              strokeWidth="0.3" />
          </div>
          <div className="infor">
            <div>Instagram</div>
            <div>elonmusk</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SVGIcon
              name="grad-cap"
              width="38.027"
              height="21.979"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              strokeWidth="0.4" />
          </div>
          <div className="infor">
            <div>Bachelor of Science in Physics</div>
            <div>University of Pennsylvania</div>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <Avatar avatarUrl="" style={{ width: "50px" }} />
          </div>
          <div className="infor">
            <div>Kimbak Musk</div>
            <div>Brother</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProfileInformation
