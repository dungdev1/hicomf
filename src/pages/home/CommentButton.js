import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { convertNum } from '../../utils';
import { fetchComments } from './commentsSlice';

function CommentButton({ onOpenCommenBoxChange, numComments, postId }) {
  const { getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();

  function handleOpenCommentBoxChange() {
    (async () => {
      const url = process.env.REACT_APP_SERVER_URL + `/api/v1/posts/${postId}/comments/`;
      const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
      const accessToken = await getAccessTokenSilently({ audience });

      dispatch(fetchComments({ accessToken, url }));

    })();
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
      <p>{convertNum(numComments)}</p>
    </>
  )
}

export default CommentButton;
