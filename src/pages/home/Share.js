import React from 'react';
import Button from '../../components/Button';

function Share() {
  return (
    <>
      <Button
        className="button button__share"
        iconName="share"
        fill="#D3D8E0"
        stroke="#D3D8E0"
        strokeWidth="0.5"
        width="35.829"
        height="29.561"
      />
      <div className="num-shares">
        0
      </div>
    </>
  );
}

export default Share;
