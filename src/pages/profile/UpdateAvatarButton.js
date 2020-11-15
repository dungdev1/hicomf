import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserInforContext } from '../../AppRoutes';
import Button from '../../components/Button';
import { firebaseApp } from '../../lib/firebase';
import { callApi } from '../../utils';
import './UpdateAvatarButton.scss';

const uploadImage = (file, setImgUrl) => {
  // Upload image to storage
  // Create a storage ref
  const storageRef = firebaseApp.storage().ref('posts/' + file.name);

  // Upload file
  const task = storageRef.put(file);

  // Update progress bar
  task.on('state_changed', null, null, () => {

    storageRef.getDownloadURL()
      .then((url) => {
        setImgUrl(url);
      });
  });
}

function UpdateAvatarButton() {
  const [imgUrl, setImgUrl] = useState("");
  const { getAccessTokenSilently } = useAuth0();
  const [userInfor, setUserInfor] = useContext(UserInforContext);

  useEffect(() => {
    if (imgUrl.length > 0) {
      (async () => {
        const url = process.env.REACT_APP_SERVER_URL + `/api/v1/profiles/${userInfor.id}/`;
        const options = { 
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          method: 'PUT',
          body: JSON.stringify({
            user_avatar: imgUrl
          }),
          headers: {
            'Content-Type': 'application/json',
          }
         };
        const profileData = await callApi(url, options, getAccessTokenSilently);
        setUserInfor({
          ...userInfor,
          avatar: profileData.avatar
        });
      })()
    }
  }, [imgUrl]);

  // Create a reference to the hidden file input  element.
  const hiddenFileInput = useRef(null);

  // Click the hidden file when button is clicked.
  const handleClick = event => {
    hiddenFileInput.current.click();
  }

  // Handle input file.
  const handleChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file, setImgUrl);
  };

  return (
    <div className="UpdateAvatarButton">
      <Button
        iconName="camera"
        fill="#000"
        stroke="#000"
        width="20"
        height="20"
        onClick={handleClick}
        className="button camera__button" />
      <input accept="image/*" id="icon-button-file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }} />
    </div>
  );
}

export default UpdateAvatarButton;
