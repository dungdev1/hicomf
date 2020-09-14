import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';

import db from '../../lib/firebase';

function Like(props) {
  const [{ user }, ] = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likeID, setLikeID] = useState("");

  useEffect(() => {
    db.collection(`posts/${props.postID}/likes`)
    .onSnapshot(function(querySnapshot) {
      if (querySnapshot.docs.length === 0) {
        setLikes([]);
      }
      let allLikes = [];
      querySnapshot.docs.forEach((doc, index) => {
        const like = doc.data();
        like.id = doc.id;
        like.user.get()
        .then(doc => doc.data())
        .then(userData => {like.userData = userData})
        .then(() => {
          allLikes.push(like);
          if (index === querySnapshot.docs.length - 1) {
            setLikes(allLikes);
            if (allLikes.length > 0) {
              allLikes.forEach(like => {
                if (like.user.id === user.uid) {
                  setIsLiked(true);
                  setLikeID(like.id);
                }
              });
            }   
          }
        });
      });
    });
  }, [])

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      db.collection(`posts/${props.postID}/likes`).add({
        user: db.doc('users/' + user.uid)
      })
    } else {
      db.doc(`posts/${props.postID}/likes/${likeID}`).delete().then(function() {
        console.log("Document successfully deleted!");
        setIsLiked(false);
      });
    }
  }

  return (
    <>
      <Button
        className="button button__like"
        iconName="thumb-up"
        fill={isLiked ? "#5085E8" : "D3D8E0"}
        stroke={isLiked ? "#5085E8" : "D3D8E0"}
        strokeWidth="0.5"
        width="33.161"
        height="29.561"
        onClick={handleClick}
        className="button"
      />
      <div className="num_likes">
        {props.convertNum(likes.length)}
      </div>
    </>
  )
}

export default Like;
