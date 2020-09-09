import React from 'react'
import { Avatar } from '@material-ui/core'
import Button from '../../components/Button';

import './Post.css';

const convertNum = (num) => {
  if (num > 1000000) {
    return num / 100000 + "M";
  }
  else if (num > 1000) {
    return num / 1000 + "k";
  }
  else {
    return num;
  }
};

function Post({ profilePic, image, username, timestamp, caption, numLike, numComment, numShare }) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__info">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__setting">
          <Button
            className="button button__setting"
            iconName="more-horiz"
            fill="#d3d8e0"
            stroke="#d3d8e0"
            width="29.401"
            height="6.918"
          />
        </div>
      </div>
      <div className="post__caption">
        <p>{caption}</p>
      </div>
      <div className="post__image">
        {/* <img src="https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt=""/> */}
        {/* <img src="https://vcdn-vnexpress.vnecdn.net/2020/07/12/VNE-SpaceX-5599-1594554384.jpg" alt="post image" /> */}
        <img src={image} alt="post image" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <Button
            className="button button__like"
            iconName="thumb-up"
            fill="#5085E8"
            stroke="#5085E8"
            strokeWidth="0.5"
            width="33.161"
            height="29.561"
          />
          <p style={{color: "#5085E8"}}>{convertNum(numLike)}</p>
        </div>
        <div className="post__option">
          <Button
            className="button button__comment"
            iconName="comment"
            width="30.516"
            height="29.314"
            strokeWidth="0.5"
          />
          <p>{convertNum(numComment)}</p>
        </div>
        <div className="post__option">
          <Button
            className="button button__share"
            iconName="share"
            width="35.829"
            height="29.314"
            strokeWidth="0.5"
          />
          <p>{convertNum(numShare)}</p>
        </div>
        <div className="post__option"></div>
      </div>
    </div>
  )
}

export default Post
