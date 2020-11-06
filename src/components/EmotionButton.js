import React from 'react';
import Button from './Button';

function EmotionButton() {

  return (
    <div className="EmotionButton">
      <label>
      <Button 
          iconName="smile"
          fill="#d3d8e0"
          stroke="#d3d8e0"
          strokeWidth="0.6"
          width="19.45" 
          height="19.45"
          className="button smile__button"
        />
      </label>
    </div>
  )
}

export default EmotionButton
