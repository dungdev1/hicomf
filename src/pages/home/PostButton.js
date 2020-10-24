import React from 'react';
import { useHistory } from "react-router-dom";

import './HeadButton.scss';

function PostButton({ className, refresh, active }) {

  return (
    <h3 className={`${className} ${active ? 'active' : ''}`} onClick={refresh}>
      Posts
    </h3>
  );
}

export default PostButton;