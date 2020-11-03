import React from 'react';
import SVGIcon from './SVGIcon';

import './Button.css';

function Button({ className, children, disabled, iconName, onClick, onMouseEnter, ...props }) {
  return (
    <button disabled={disabled} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>
      {iconName && <SVGIcon name={iconName} {...props} />}

      {/* Other children */}
      {children}
    </button>
  )
}

export default Button;
