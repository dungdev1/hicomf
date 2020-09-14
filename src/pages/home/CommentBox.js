import React, { useEffect, useState } from 'react';

import './CommentBox.css';

import Comment from './Comment';
import db from '../../lib/firebase';
import CommentInput from './CommentInput';
import CommentLoadingOption from './CommentLoadingOption';

function CommentBox({ postID }) {
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function loadData(numRecords) {
    db.collection(`posts/${postID}/comments`)
      .limit(numRecords)
      .orderBy('timestamp', 'desc')
      .onSnapshot(function (querySnapshot) {
        if (querySnapshot.docs.length === 0)  {
          setIsLoaded(true);
        }
        let allComments = [];
        querySnapshot.docs.forEach((doc, index) => {
          const comment = doc.data();
          comment.id = doc.id;
          comment.user.get()
            .then(doc => doc.data())
            .then(userData => { comment.userData = userData })
            .then(() => {
              allComments.push(comment);
              if (index === querySnapshot.docs.length - 1) {
                setComments(allComments);
                setIsLoaded(true);
              }
            });
        });
      });
  }

  useEffect(() => {
    loadData(2);
  }, []);

  return (
    <>
      {!isLoaded
        ? <div className="loader"></div>
        : (
          <div className="comment-box">
            <CommentLoadingOption 
              loadData={loadData}
            />
            <CommentInput postID={postID} />
            <div className="comment-box__comments">
              {comments.map(comment => (
                <Comment
                  key={comment.id}
                  userInfo={comment.userData}
                  time={comment.timestamp}
                  content={comment.content} />
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}

export default CommentBox;
