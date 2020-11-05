import React, { useEffect } from 'react';

import './PreviewPost.css';

function PreviewPost(props) {
  
  useEffect(() => {
    // Get element
    const previewImage = document.querySelector('.preview-post');
    const imgPreview = document.querySelector('.image-preview__image');

    if (!(Object.keys(props.file).length === 0 && props.file.constructor === Object)) {
      previewImage.style.display = "block";
      imgPreview.setAttribute("src", URL.createObjectURL(props.file));
    } else {
      previewImage.style.display = "none";
    }
  }, [props.file]);
  
  return (
    <div className="preview-post">
      <img src="" alt="Preview" className="image-preview__image" />
    </div>
  );
}

export default PreviewPost;
