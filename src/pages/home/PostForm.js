import React, { useState, useContext } from 'react';
import { Avatar } from '@material-ui/core'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

import UpLoadButton from '../../components/UpLoadButton';
import EmotionButton from '../../components/EmotionButton';
import FriendsButton from '../../components/FriendsButton';

import { AuthContext } from '../../contexts/AuthContext';

import firebase from 'firebase';
import db, { firebaseApp } from '../../lib/firebase';

import './PostForm.css';

function PostForm(props) {
  const [{ user },] = useContext(AuthContext);

  const handleCaptionChange = (e) => {
    props.onCaptionChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(Object.keys(props.file).length === 0 && props.file.constructor === Object)) {
      let uploader = document.getElementById('uploader');
      uploader.style.display = "block";

      // Upload image to storage
      // Create a storage ref
      const storageRef = firebaseApp.storage().ref('posts/' + props.file.name);

      // Upload file
      const task = storageRef.put(props.file);

      // Update progress bar
      task.on('state_changed',
        function progress(snapshot) {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },

        function error(err) {
          console.error(err);
        },

        function complete() {
          uploader.style.display = "none";
          props.onCaptionChange("");
          props.onFileChange({});
          storageRef.getDownloadURL()
            .then((url) => {
              db.collection('posts').add({
                user: db.doc('users/' + user.uid),
                caption: props.caption,
                image: url,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              });
            });
        }
      );
    }
    else {
      props.onCaptionChange("");
      db.collection('posts').add({
        user: db.doc('users/' + user.uid),
        caption: props.caption,
        image: "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }

  return (
    <>
      <progress value="0" max="100" id="uploader">0%</progress>
      <div className="post-form">
        <Avatar src={user.photoURL} />
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
          <div className="form__live-input-options">
            <div className="form__live-input-option">
              <PhotoCameraOutlinedIcon style={{ color: "#5085E8" }} />
            </div>
            <div className="form__live-input-option">
              <VideocamOutlinedIcon style={{ color: "#5085E8" }} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default PostForm;
