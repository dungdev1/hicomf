import React from 'react';

import './Mode.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

function Mode({ mode }) {
  return (
    <div className="tooltip mode">
      <FontAwesomeIcon icon={faGlobeAsia} />
      <span className="tooltiptext">{mode}</span>
    </div>
  )
}

export default Mode;