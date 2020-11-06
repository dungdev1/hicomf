import React from 'react';
import Avatar from '../../components/Avatar';

import UpLoadButton from '../../components/UpLoadButton';
import EmotionButton from '../../components/EmotionButton';
import FriendsButton from '../../components/FriendsButton';

import './PostForm.css';
import { useAuth0 } from '@auth0/auth0-react';

function PostForm(props) {
  const { user } = useAuth0();

  const handleCaptionChange = (e) => {
    props.onCaptionChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="post-form">
        <Avatar style={{width: "40px"}} avatarUrl={user.picture} />
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={props.caption}
            className="form__text-input"
            placeholder={`What's on your mind?, ${user.displayName}`}
            onChange={handleCaptionChange}
          />
          <div className="form__upload-options">
            <div className="form__upload-option">
              <UpLoadButton onFileChange={props.onFileChange} />
            </div>
            <div className="form__upload-option">
              <FriendsButton />
            </div>
            <div className="form__upload-option">
              <EmotionButton />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default PostForm;
