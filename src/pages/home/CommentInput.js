import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

import db from '../../lib/firebase';
import firebase from 'firebase';

import './CommentInput.css';
import { useAuth0 } from '@auth0/auth0-react';
import { callApi } from '../../utils';
import { UserInforContext } from '../../AppRoutes';
import Avatar from '../../components/Avatar';
import { useDispatch } from 'react-redux';
import { addNewComment } from './commentsSlice';

function CommentInput({ postId }) {
  const [userInfor, setUserInfor] = useContext(UserInforContext);
  const [content, setContent] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const textRef = useRef(null);

  const dispatch = useDispatch();

  function handleInputChange(e) {
    setContent(e.currentTarget.innerText);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (content.length > 0) {
        (async () => {
          const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
          const accessToken = await getAccessTokenSilently({ audience });
          const url = process.env.REACT_APP_SERVER_URL + `/api/v1/posts/${postId}/comments/`;
          dispatch(addNewComment({ accessToken, url, initialComment: { text: content } }));
        })();
      }
      textRef.current.innerText = "";
      setContent("");
    }
  }

  return (
    <div className="comment-box__input">
      <div className="comment-box__input-avatar">
        <Avatar 
          avatarUrl={userInfor.avatar} 
          name={userInfor.full_name}
          style={{width: "40px"}} />
      </div>
      <div className="comment-box__form">
        <span
          className="textarea"
          role="textbox"
          contentEditable
          onInput={handleInputChange}
          suppressContentEditableWarning
          onKeyPress={handleKeyPress}
          ref={textRef}
        ></span>
      </div>
    </div>
  )
}

export default CommentInput;
