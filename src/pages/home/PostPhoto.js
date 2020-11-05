import React from 'react';
import Spinner from '../../components/Spinner';
import { useApi } from '../../hooks/use-api';

const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

function PostPhoto({ photos }) {
  const { loading, error, data: photo } = useApi(photos[0], options);

  let content;

  if (loading) {
    content = <Spinner active={true} />
  } else if (error) {
    content = <div>Oops... {error.message}</div>
  } else {
    content = <img src={photo.photo_url} alt="post" />;
  }

  return (
    <div className="PostPhoto">
      {content}
    </div>
  );
}

export default PostPhoto;