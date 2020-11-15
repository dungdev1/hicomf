import React, { useContext } from 'react';
import Spinner from '../../components/Spinner';
import SVGIcon from '../../components/SVGIcon';
import { ProfileContext } from '../../contexts/ProfileContext';
import { useApi } from '../../hooks/use-api';

import './ProfilePhoto.scss';
import SearchBar from './SearchBar';

function ProfilePhoto() {
  const profile = useContext(ProfileContext);
  const url = process.env.REACT_APP_SERVER_URL + `/api/v1/photos?profile_id=${profile.profileId}`;
  const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE };
  const { loading, error, data: photos, refresh } = useApi(url, options)

  if (loading) {
    return <Spinner active={true} />;
  } else if (error) {
    return <div>Opps...{error.message}</div>;
  }

  return (
    <div className="ProfilePhoto">
      <div className="ProfilePhotoHeader">
        <div className="active redirect__button">All photos</div>
        <div className="redirect__button">Photos with Elon</div>
        <div className="redirect__button">Albums</div>
        <div className="buttons">
          <SearchBar />
          <SVGIcon 
            name="filter"
            width="23.96"
            height="27.21"
            fill="#d3d8e0"
            stroke="#d3d8e0"
          />
        </div>
      </div>
      <div className="photos">
        {photos.map(photo => (
          <img src={photo.photo_url} style={{height: "150px"}} />
        ))}
      </div>
    </div>
  )
}

export default ProfilePhoto;