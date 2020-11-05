import React, { useState } from 'react';

import './MessageSender.css';
import PostForm from './PostForm';
import PreviewPost from './PreviewPost';

function MessageSender() {
  const [file, setFile] = useState({});
  const [caption, setCaption] = useState("");
  
  const handleFileChange = (newFile) => {
    setFile(newFile);
  };

  const handleCaptionChange = (newCaption) => {
    setCaption(newCaption);
  };

  return (
    <div className="message-sender">
      <PostForm
        caption={caption}
        file={file}
        onFileChange={handleFileChange}
        onCaptionChange={handleCaptionChange}
      />
      <PreviewPost
        file={file}
        caption={caption}
      />
    </div>
  );
}

export default MessageSender
