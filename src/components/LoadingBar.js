import React from 'react';
import './LoadingBar.css';

function LoadingBar({ active, ...rest }) {
  return (
    <div
      className={`loading-bar ${active ? 'active' : ''}`}
      {...rest}
    ></div>
  )
}

export default LoadingBar;
