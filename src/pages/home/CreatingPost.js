import React from 'react';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function CreatingPost() {
  return (
    <div className="creating-post">
      <h2>Create Post</h2>
      <div className="creating-post__body">        
        <div className="creating-post__topInfo">
          <Avatar src="" />
          <div className="creating-post__topInfo__right">
            <h3>Dung Nguyen</h3>
            <p>Only me</p>
          </div>
        </div>
        <div className="creating-post__content">
          <input type="text" placeholder="What's on your mind" />
          <div className="image-content">
            <img src="" alt=""/>
          </div>
        </div>
        <div className="creating-post__additionInfo">
          <p>Add to Your Post</p>
          <div className="icons">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="creating-post__button">
        <Button variant="contained" color="primary">
          Post
        </Button>
      </div>
    </div>
  )
}

export default CreatingPost;
