import React from 'react';
import './Event.css';

function Event() {
  return (
    <div className="upcoming-events">
      <div className="upcoming-envents__header">
        <h3>Upcoming events</h3>
        <a href="">All</a>
      </div>    
      <div className="events">
        <img src="https://www.tripsavvy.com/thmb/fj157IgKECq7Bq4i--Dgcvm5idA=/2416x1600/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-visit-the-googleplex-google-hq-mountain-view-57e2d4515f9b586c3529ba9c.jpg"
          alt="Google headquaters"
          width="1049px"
          height="695px"/>
        <h4>Google open meetup - Pixel</h4>
        <p>3:10 PM, Today</p>
      </div>
    </div>
  );
}

export default Event;
