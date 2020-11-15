import React from 'react';

import './EditDialog.scss';


function EditDialog({ ref1, isComponentVisible }) {

  let wrapperBoxStyle;
  if (isComponentVisible) {
    wrapperBoxStyle = {display: "block"};
  }
  return (
    <div className="editDialog modal"
      style={wrapperBoxStyle}
    >
      <div ref={ref1} >
        {isComponentVisible && (
          <div className="modal-content">
            <div className="header">
              Edit Profile
            </div>
            <div className="content">
              <div className="item">
              </div>
              <div className="item">
              </div>
              <div className="item">
              </div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditDialog;