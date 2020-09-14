import React from 'react';
import SVGIcon from './SVGIcon';

import './Button.css';

function Button({ className, children, disabled, iconName, onClick, ...props }) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {iconName && <SVGIcon name={iconName} {...props} />}

      {/* Other children */}
      {children}
    </button>
  )
}

export default Button;
