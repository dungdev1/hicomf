import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

import db from '../../lib/firebase';
import { convertNum } from '../../utils';

function CommentButton({ postID, onOpenCommenBoxChange }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection(`posts/${postID}/comments`)
    .onSnapshot(function(querySnapshot) {
      if (querySnapshot.docs.length === 0) {
        setComments([]);
      }
      let allComments = [];
      querySnapshot.docs.forEach((doc, index) => {
        const comment = doc.data();
        comment.id = doc.id;
        comment.user.get()
        .then(doc => doc.data())
        .then(userData => {comment.userData = userData})
        .then(() => {
          allComments.push(comment);
          if (index === querySnapshot.docs.length - 1) {
            setComments(allComments); 
          }
        });
      });
    });
  }, []);

  function handleOpenCommentBoxChange() {
    onOpenCommenBoxChange();
  }

  return (
    <>
      <Button
        className="button button__comment"
        iconName="comment"
        fill="#D3D8E0"
        stroke="#D3D8E0"
        width="30.516"
        height="29.314"
        strokeWidth="0.5"
        onClick={handleOpenCommentBoxChange}
      />
      <p>{convertNum(comments.length)}</p>
    </>
  )
}

export default CommentButton;
