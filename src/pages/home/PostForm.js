import React, { useEffect, useRef, useState } from 'react';
import Avatar from '../../components/Avatar';

import UpLoadButton from '../../components/UpLoadButton';
import EmotionButton from '../../components/EmotionButton';
import FriendsButton from '../../components/FriendsButton';

import './PostForm.css';
import { useAuth0 } from '@auth0/auth0-react';
import { firebaseApp } from '../../lib/firebase';

function PostForm(props) {
  const { user } = useAuth0();
  const [data, setData] = useState({}); // Include caption and image URL
  const textRef = useRef(null);

  useEffect(() => {
    if (!(Object.keys(data).length === 0 && data.constructor === Object)) {
      // Send data to server
      console.log(data);
    }
  }, [data])

  const handleCaptionChange = (e) => {
    props.onCaptionChange(e.currentTarget.innerText);
  };

  const handleSubmit = () => {
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
          textRef.current.innerText = "";          
          props.onCaptionChange("");
          props.onFileChange({});

          storageRef.getDownloadURL()
            .then((url) => {
              setData({
                ...data,
                imageUrl: url,
                caption: props.caption,                
              });
            });
        }
      );
    } else {
      textRef.current.innerText = "";
      props.onCaptionChange("");
      setData({
        ...data,
        caption: props.caption,                
      });
    }
  }

  return (
    <>
      <progress value="0" max="100" id="uploader">0%</progress>
      <div className="post-form">
        <Avatar style={{ width: "40px", alignSelf: "flex-start" }} avatarUrl={user.picture} />
        <div className="form">
          <div className="form-top">
            <span
              className="textarea"
              role="textbox"
              contentEditable
              onInput={handleCaptionChange}
              suppressContentEditableWarning
              ref={textRef}
            ></span>
          </div>
          <div className="form-bottom">
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
            <div 
              className="post__button button"
              onClick={handleSubmit}
              style={props.caption.length === 0 ? {opacity: "0.7"} : {opacity: "1"}}
            >
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(PostForm);
