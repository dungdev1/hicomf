import React, { useEffect } from 'react';
import Button from '../../components/Button';

import './PreviewPost.css';

function PreviewPost(props) {

  // Get element
  const previewImage = document.querySelector('.preview-post');
  const imgPreview = document.querySelector('.image-preview__image');

  useEffect(() => {
    if (!(Object.keys(props.file).length === 0 && props.file.constructor === Object)) {
      previewImage.style.display = "block";
      imgPreview.setAttribute("src", URL.createObjectURL(props.file));
    } else if (previewImage) {
      previewImage.style.display = "none";
    }
  }, [props.file]);

  const handleCancelCLick = () => {
    previewImage.style.display = "none";
  }

  return (
    <div className="preview-post">
      <img src="" alt="Preview" className="image-preview__image" />
      <Button
        iconName="cancel"
        fill="#454545"
        stroke="#454545"
        strokeWidth="0.6"
        width="20"
        height="20"
        onClick={handleCancelCLick}
        className="button cancel__button"
      />
      <div className="editButton">
        <button 
          className="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default PreviewPost;
