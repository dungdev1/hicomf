import React from "react";

const getViewBox = (name) => {
  switch (name) {
    case "thumb-up":
      return "0 0 33.161 29.561";
    case "more-horiz":
      return "0 0 29.401 6.918";
    case "share":
      return "0 0 35.829 29.561";
    case "comment":
      return "0 0 30.516 29.561";
    case "search":
      return "0 0 23.481 23.487";
    default:
      return "0 0 32 32";
  }
};

const getContent = (name, props) => {
  switch (name) {
    case "thumb-up":
      return (
        <>
          <path
            {...props}
            d="M2.932,3.068H9.5a2.09,2.09,0,0,1,2.085,2.085V17.567A2.09,2.09,0,0,1,9.5,19.653H2.932A2.09,2.09,0,0,1,.847,17.567V5.154A2.09,2.09,0,0,1,2.932,3.068ZM9.5,4.087H2.932A1.072,1.072,0,0,0,1.865,5.154V17.567a1.072,1.072,0,0,0,1.067,1.067H9.5a1.072,1.072,0,0,0,1.067-1.067V5.154A1.072,1.072,0,0,0,9.5,4.087Z"
            transform="translate(-0.847 9.248)" />
          <path
            {...props}
            d="M2.648,14.542a.507.507,0,1,0,.437.915c.02-.01,6.988-3.24,5.967-13.216,1.411-.257,5.927-.36,3.969,9.561h0a.509.509,0,0,0,.607.6c.838-.107,13.963-1.7,9.762,4.743h0a.509.509,0,0,0,.051.622c.192.249,1.648,2.272-.669,3.4h0a.509.509,0,0,0-.254.637c.069.207.831,2.622-.958,3.389h0a.509.509,0,0,0-.306.515c0,.42-.114,3.792-2.966,3.4h0a.515.515,0,0,0-.078,0H5.826L3.194,27.651a.508.508,0,1,0-.489.891l2.72,1.5a.507.507,0,0,0,.272.079H18.2c3.515.445,3.993-3.042,4.056-4.141,1.835-1.008,1.552-3.186,1.336-4.1,2.473-1.453,1.355-3.674.835-4.473,4.357-7.139-7.268-6.387-10.279-6.082C16.3-.855,8.891,1.2,8.375,1.358a.509.509,0,0,0-.383.557h0c1.19,9.6-5.326,12.618-5.344,12.627Z"
            transform="translate(7.267 -1.133)" />
        </>
      );
    case "more-horiz":
      return (
        <g id="Group_953" data-name="Group 953" transform="translate(737.401 -1759) rotate(90)">
          <circle cx="3.459" cy="3.459" r="3.459"
            transform="translate(1759 708)"
            {...props}
          />
          <circle cx="3.459" cy="3.459" r="3.459" transform="translate(1759 719.242)"
            {...props}
          />
          <circle cx="3.459" cy="3.459" r="3.459" transform="translate(1759 730.483)"
            {...props}
          />
        </g>
      );
    case "comment":
      return (
        <path
          {...props}
          d="M52.517,32H26a1.963,1.963,0,0,0-2,2V53.985a1.963,1.963,0,0,0,2,2h4.664v4.664a.658.658,0,0,0,1.133.466l5.13-5.13H52.517a1.963,1.963,0,0,0,2-2V34A1.963,1.963,0,0,0,52.517,32Zm.666,21.985a.629.629,0,0,1-.666.666H36.658a.6.6,0,0,0-.466.2l-4.2,4.2V55.318a.629.629,0,0,0-.666-.666H26a.629.629,0,0,1-.666-.666V34A.629.629,0,0,1,26,33.332H52.517a.629.629,0,0,1,.666.666Z"
          transform="translate(-24 -32)"
        />
      );
    case "share":
      return (
        <path
          {...props}
          d="M2.824,36.773a.752.752,0,0,1-.746-.687c-.191-2.245-.424-10,4.568-15.43,3.177-3.457,7.84-5.267,13.871-5.374V8.164a.7.7,0,0,1,1.146-.549L37.577,20.871a.7.7,0,0,1,0,1.081L21.675,35.2a.7.7,0,0,1-1.164-.549V27.4a.084.084,0,0,0-.072-.084c-2.126-.382-9.65-.86-17.006,9.124a.752.752,0,0,1-.609.328ZM21.532,16.291a.6.6,0,0,1-.424.173c-5.971,0-10.539,1.678-13.585,5C3.517,25.821,3.117,31.84,3.194,34.8c7.542-9.554,15.227-9.052,17.454-8.646A1.278,1.278,0,0,1,21.705,27.4V33.62L36.359,21.409,21.705,9.2v6.664A.6.6,0,0,1,21.532,16.291Z"
          transform="translate(-2 -7.459)"
        />
      );
    case "search":
      return (
        <path 
          d="M90.159,88.853a9.069,9.069,0,1,0-1.206,1.206l6.208,6.221,1.212-1.212Zm-6.992,1.58a7.362,7.362,0,1,1,7.359-7.365A7.366,7.366,0,0,1,83.168,90.433Z" 
          transform="translate(-73.6 -73.5)"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "transparent",
  stroke = "#000",
  strokeWidth = "1.0",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
    <svg
      width={width}
      height={height}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
    >
      {getContent(name, { fill, stroke, strokeWidth })}
    </svg>
  );

export default SVGIcon;