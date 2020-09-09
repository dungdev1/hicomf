import React from 'react'
import { Avatar } from '@material-ui/core'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

import UpLoadButton from '../../components/UpLoadButton';
import EmotionButton from '../../components/EmotionButton';
import FriendsButton from '../../components/FriendsButton';

import './MessageSender.css';

function MessageSender() {
  return (
    <div className="message-sender">
      <Avatar src="" />
      <form>
        <input
          type="text"
          className="message-sender__input"
          placeholder="What's on your mind?"
        />
        <div className="message-sender__infoButtons">
          <div className="message-sender__option">
            <UpLoadButton />
          </div>
          <div className="message-sender__option">
            <FriendsButton />
          </div>
          <div className="message-sender__option">
            <EmotionButton />
          </div>
        </div>
        <div className="message-sender__liveInput">
          <div className="message-sender__liveInput__option">
            <PhotoCameraOutlinedIcon style={{color: "#5085E8"}} />
          </div>
          <div className="message-sender__liveInput__option">
            <VideocamOutlinedIcon style={{color: "#5085E8"}} />
          </div>
          
        </div>
         
      </form>
    </div>
  )
}

export default MessageSender
