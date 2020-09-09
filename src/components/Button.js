import React from 'react';
import SVGIcon from './SVGIcon';

import './Button.css';

function Button({ className, children, disabled, iconName, ...props }) {
  return (
    <button disabled={disabled} className={className}>
      {iconName && <SVGIcon name={iconName} {...props} />}

      {/* Other children */}
      {children}
    </button>
  )
}

export default Button;
