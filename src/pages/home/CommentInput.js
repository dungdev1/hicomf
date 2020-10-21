import { Avatar } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import db from '../../lib/firebase';
import firebase from 'firebase';

import './CommentInput.css';
import { useAuth0 } from '@auth0/auth0-react';

function CommentInput({ postID }) {
  const { user } = useAuth0();
  const [content, setContent] = useState("");

  function handleInputChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    db.collection(`posts/${postID}/comments`).add({
      content: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: db.doc('users/' + user.uid)
    });
    setContent("");
  }

  return (
    <div className="comment-box__input">
      <div className="comment-box__input-avatar">
        <Avatar src={user.photoURL} />
      </div>
      <div className="comment-box__form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Leave comment"
            value={content}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  )
}

export default CommentInput;
