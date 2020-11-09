import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button';
import { UserContext } from '../../AppRoutes';

import { callApi } from '../../utils';
import LikeUser from './LikeUser';

function Like({ numLikes, postId }) {
  const { getAccessTokenSilently } = useAuth0();
  const userInfor = useContext(UserContext)
  const [isLiked, setIsLiked] = useState(false);
  const [likeID, setLikeID] = useState(null);
  const [likesNumber, setLikesNumber] = useState(numLikes); // serve for user when they like or unlike.

  useEffect(() => {
    if (Object.keys(userInfor).length > 0) {
      userInfor['liked_postsId'].forEach((like_post_obj) => {
        if (like_post_obj['post_id'] === postId) {
          setIsLiked(true);
          setLikeID(like_post_obj['like_id'])
        }
      });
    }
  }, []);

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      const url = process.env.REACT_APP_SERVER_URL + `/api/v1/posts/${postId}/likes/`;
      const options = {
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      };
      callApi(url, options, getAccessTokenSilently).then(res => setLikeID(res['id']));
      setLikesNumber(likesNumber + 1)
    } else {
      const url = process.env.REACT_APP_SERVER_URL + `/api/v1/posts/${postId}/likes/${likeID}/`;
      const options = {
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        method: 'DELETE',
      };
      callApi(url, options, getAccessTokenSilently);
      setLikeID('');
      setIsLiked(false);
      setLikesNumber(likesNumber - 1);
    }
  }

  return (
    <>
      <Button
        className="button button__like"
        iconName="thumb-up"
        fill={isLiked ? "#5085E8" : "#D3D8E0"}
        stroke={isLiked ? "#5085E8" : "#D3D8E0"}
        strokeWidth="0.5"
        width="33.161"
        height="29.561"
        onClick={handleClick}
        className="button"
      />
      <LikeUser likesNumber={likesNumber} postId={postId} />
    </>
  )
}

export default Like;
