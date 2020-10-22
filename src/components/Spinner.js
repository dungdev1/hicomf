import React from 'react';
import './Spinner.scss';

function Spinner({ active, ...rest }) {
  return (
    <div
      className={`Spinner ${active ? 'active' : ''}`}
      {...rest}
    >
    </div>
  );
}

export default Spinner;