import React, { useRef } from 'react';
import Button from './Button';

function UpLoadButton({ onFileChange }) {

  // Create a reference to the hidden file input  element.
  const hiddenFileInput = useRef(null);

  // Click the hidden file when button is clicked.
  const handleClick = event => {
    hiddenFileInput.current.click();
  }

  // Handle input file.
  const handleChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div className="UploadButton">
      <Button
        iconName="photo"
        fill="#d3d8e0"
        stroke="#d3d8e0"
        strokeWidth="0.6"
        width="22.8922"
        height="19.44885"
        onClick={handleClick}
        className="button photo__button"
      />
      <input accept="image/*" id="icon-button-file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: "none"}} />
    </div>
  )
}

export default UpLoadButton;
