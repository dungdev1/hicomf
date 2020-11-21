import React from 'react';
import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

import './TimeAgo.scss';

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function getDistanceTimeString(time) {
  const today = new Date();
  const date = parseISO(time);
  const daysDistance = differenceInDays(today, date);

  if (daysDistance === 0) {
    const hoursDistance = differenceInHours(today, date);
    if (hoursDistance === 0) {
      const minutesDistance = differenceInMinutes(today, date);
      if (minutesDistance === 0) {
        return 'Just now';
      }
      return `${minutesDistance}m`;
    }
    if (date.getDate() !== today.getDate()) {
      return `${formatAMPM(date)}, yesterday`;
    }
    return `${hoursDistance}h`;
  } else if (daysDistance === 1) {
    return `${formatAMPM(date)}, yesterday`;
  } else if (daysDistance >= 7) {
    return `${months[date.getMonth()]} ${date.getDate()} at ${formatAMPM(date)}`;
  }
  return `${daysDistance}d`;
}

function TimeAgo({ time, style }) {
  let timeString = '';
  if (time) {
    timeString = getDistanceTimeString(time);
  }

  const date = parseISO(time);

  const timeStringDetail = `${days[date.getDay()]}, 
    ${months[date.getMonth()]} ${date.getDate()}, 
    ${date.getFullYear()} at ${formatAMPM(date)}
  `;

  return (
    <div className="tooltip time" >
      <p style={{...style, opacity: '0.44'}}>{timeString}</p>
      <span className="tooltiptext">{timeStringDetail}</span>
    </div>
  );
}

export default TimeAgo;