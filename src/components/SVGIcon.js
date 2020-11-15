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
    case "instagram":
      return "0 0 19.893 19.893";
    case "twitter":
      return "0 0 20.053 16.289";
    case "message":
      return "0 0 26.853 24.117";
    case "more-vertical":
      return "0 0 5.558 23.62";
    case "play":
      return "0 0 17.906 23";
    case "add":
      return "0 0 22 22";
    case "verify":
      return "0 0 20.573 18.821";
    case "photo":
      return "0 0 26.932 22.881";
    case "friend":
      return "0 0 22.898 22.668";
    case "smile":
      return "0 0 22.881 22.881";
    case "cancel":
      return "0 0 329.26933 329";
    case "work":
      return "0 0 38.197 32.954";
    case "birthday-cake":
      return "0 0 38.695 46.774";
    case "person":
      return "0 0 38.312 51.504";
    case "grad-cap":
      return "0 0 38.027 21.979";
    case "map-location":
      return "0 0 39.027 46.347";
    case "camera":
      return "0 0 512 512";
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
    case "instagram":
      return (
        <g transform="translate(-397.16 -652.5)">
          <path
            d="M13.966,0H5.926A5.933,5.933,0,0,0,0,5.926v8.04a5.933,5.933,0,0,0,5.926,5.926h8.04a5.933,5.933,0,0,0,5.926-5.926V5.926A5.933,5.933,0,0,0,13.966,0Zm3.925,13.966a3.925,3.925,0,0,1-3.925,3.925H5.926A3.925,3.925,0,0,1,2,13.966V5.926A3.925,3.925,0,0,1,5.926,2h8.04a3.925,3.925,0,0,1,3.925,3.925v8.04Z"
            transform="translate(397.16 652.5)"
            {...props}
          />
          <path
            d="M138.145,133a5.145,5.145,0,1,0,5.145,5.145A5.151,5.151,0,0,0,138.145,133Zm0,8.289a3.144,3.144,0,1,1,3.144-3.144A3.144,3.144,0,0,1,138.145,141.289Z"
            transform="translate(268.961 524.301)"
            {...props} />
        </g>
      );
    case "twitter":
      return (
        <g id="twitter-logo-silhouette" transform="translate(-0.001 -57.441)">
          <g transform="translate(0.001 57.441)">
            <path
              d="M20.054,59.368a8.215,8.215,0,0,1-2.362.648A4.131,4.131,0,0,0,19.5,57.742a8.293,8.293,0,0,1-2.614,1,4.117,4.117,0,0,0-7.01,3.75,11.679,11.679,0,0,1-8.478-4.3,4.118,4.118,0,0,0,1.273,5.491,4.114,4.114,0,0,1-1.863-.516v.051a4.118,4.118,0,0,0,3.3,4.034,4.167,4.167,0,0,1-1.084.144,3.948,3.948,0,0,1-.774-.076,4.116,4.116,0,0,0,3.842,2.857A8.253,8.253,0,0,1,.982,71.935,8.742,8.742,0,0,1,0,71.879,11.628,11.628,0,0,0,6.306,73.73a11.623,11.623,0,0,0,11.7-11.7L18,61.493A8.215,8.215,0,0,0,20.054,59.368Z"
              transform="translate(-0.001 -57.441)"
              {...props}
            />
          </g>
        </g>
      );
    case "message":
      return (
        <g transform="translate(0.3 0.3)">
          <path
            d="M101.767,97.5H82.486A3.5,3.5,0,0,0,79,100.993V112.4a3.5,3.5,0,0,0,3.486,3.5h6.422l2.818,4.858a.524.524,0,0,0,.9,0l2.825-4.858h6.311a3.5,3.5,0,0,0,3.486-3.5V100.986A3.491,3.491,0,0,0,101.767,97.5Zm2.447,14.884a2.462,2.462,0,0,1-2.447,2.462H95.145a.516.516,0,0,0-.452.252l-2.521,4.346L89.649,115.1a.516.516,0,0,0-.452-.252H82.486a2.462,2.462,0,0,1-2.447-2.462v-11.4a2.456,2.456,0,0,1,2.447-2.455h19.282a2.456,2.456,0,0,1,2.447,2.455Z"
            transform="translate(-79 -97.5)"
            {...props}
          />
          <rect width="16.464" height="1.038" transform="translate(4.895 12.378)" {...props} />
          <rect width="16.464" height="1.038" transform="translate(4.895 8.595)" {...props} />
          <rect width="9.27" height="1.038" transform="translate(4.895 4.813)" {...props} />
        </g>
      );
    case "more-vertical":
      return (
        <>
          <circle cx="2.779" cy="2.779" r="2.779"
            transform="translate(0 0)"
            {...props} />
          <circle cx="2.779" cy="2.779" r="2.779"
            transform="translate(0 9.031)"
            {...props} />
          <circle cx="2.779" cy="2.779" r="2.779"
            transform="translate(0 18.062)"
            {...props} />
        </>
      );
    case "play":
      return (
        <path
          d="M17.373,10.506,1.868.21A1.193,1.193,0,0,0,0,1.2V21.8a1.193,1.193,0,0,0,1.868.994l15.5-10.3a1.193,1.193,0,0,0,0-1.988Z"
          {...props}
        />
      );
    case "add":
      return (
        <g transform="translate(0.5 0.5)">
          <path
            d="M36.5,978.362a.437.437,0,0,0-.437.437v9.625H26.437a.437.437,0,1,0,0,.875h9.625v9.625a.437.437,0,0,0,.875,0V989.3h9.625a.437.437,0,1,0,0-.875H36.937V978.8A.437.437,0,0,0,36.5,978.362Z"
            transform="translate(-26 -978.362)"
            {...props}
          />
        </g>
      );
    case "verify":
      return (
        <path d="M25.128,15.182a1.145,1.145,0,0,0-1.609.2L11.1,31,6.848,27.7A1.147,1.147,0,1,0,5.44,29.51l5.153,4.008a1.145,1.145,0,0,0,1.609-.2L25.328,16.791a1.145,1.145,0,0,0-.2-1.609Z"
          transform="translate(-4.998 -14.94)"
        />
      );
    case "photo":
      return (
        <g id="noun_Photo_1093000" transform="translate(0.3 0.3)">
          <g id="Group_949" data-name="Group 949" transform="translate(0 0)">
            <path id="Path_73" data-name="Path 73"
              d="M37.332,34.554V21.726A4.74,4.74,0,0,0,32.606,17H15.726A4.74,4.74,0,0,0,11,21.726V34.554a4.74,4.74,0,0,0,4.726,4.726H32.606A4.74,4.74,0,0,0,37.332,34.554ZM15.726,18.35H32.606a3.386,3.386,0,0,1,3.376,3.376v7.123l-3.207-2.768a4.041,4.041,0,0,0-5.435.135l-2.127,1.992-1.418-1.755a4.061,4.061,0,0,0-5.233-.911L12.35,29.288V21.726A3.386,3.386,0,0,1,15.726,18.35Zm-3.376,16.2v-3.68l6.887-4.186a2.709,2.709,0,0,1,3.511.608L31.356,37.93H15.726A3.386,3.386,0,0,1,12.35,34.554ZM33.078,37.9l-7.022-8.642,2.194-2.093a2.691,2.691,0,0,1,3.612-.068l4.119,3.545v3.916A3.381,3.381,0,0,1,33.078,37.9Z"
              transform="translate(-11 -17)"
              {...props} />
          </g>
        </g>
      );
    case "friend":
      return (
        <g id="noun_friends_1297819" transform="translate(0.45 -0.063)">
          <g id="Group_47" data-name="Group 47" transform="translate(0 0)">
            <g id="Group_46" data-name="Group 46">
              <path id="Path_70" data-name="Path 70"
                d="M55,52.209a.652.652,0,0,1-1.294,0c0-4.234-3.548-6.284-9.705-6.284s-9.705,2.051-9.705,6.284a.652.652,0,0,1-1.294,0c0-4.991,4.214-7.427,11-7.427S55,47.218,55,52.209ZM44,42.6a5.564,5.564,0,0,1-5.823-5.82A5.566,5.566,0,0,1,44,31.013a5.566,5.566,0,0,1,5.823,5.771A5.564,5.564,0,0,1,44,42.6Zm0-1.143a4.389,4.389,0,0,0,4.529-4.678,4.53,4.53,0,1,0-9.058,0A4.389,4.389,0,0,0,44,41.462Z"
                transform="translate(-33 -30.5)"
                {...props} />
            </g>
          </g>
        </g>
      );
    case "smile":
      return (
        <g id="noun_Smile_169431" transform="translate(0.3 0.3)">
          <path id="Path_74" data-name="Path 74"
            d="M32.176,32.5a1.176,1.176,0,1,0,1.176,1.176A1.185,1.185,0,0,0,32.176,32.5Z"
            transform="translate(-24.563 -25.692)"
            {...props} />
          <path id="Path_75" data-name="Path 75"
            d="M60.676,32.5a1.176,1.176,0,1,0,1.176,1.176A1.185,1.185,0,0,0,60.676,32.5Z"
            transform="translate(-46.008 -25.692)"
            {...props} />
          <path id="Path_76" data-name="Path 76"
            d="M16.14,5a11.14,11.14,0,1,0,11.14,11.14A11.15,11.15,0,0,0,16.14,5Zm0,1.362A9.779,9.779,0,1,1,6.362,16.14,9.762,9.762,0,0,1,16.14,6.362Z"
            transform="translate(-5 -5)"
            {...props} />
          <path id="Path_77" data-name="Path 77"
            d="M38.68,61.011a.675.675,0,0,0-.549-1.106.757.757,0,0,0-.572.364,5.215,5.215,0,0,1-8.417,0,.757.757,0,0,0-.572-.364.675.675,0,0,0-.549,1.106,6.535,6.535,0,0,0,10.661,0Z"
            transform="translate(-22.209 -46.312)"
            {...props} />
        </g>
      );
    case "cancel":
      return (
        <path
          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          {...props}
        />
      );
    case "work":
      return (
        <g id="noun_Work_1819106" transform="translate(-8.83 -12)">
          <path
            d="M40.845,17.061H37.408V14.9A2.885,2.885,0,0,0,34.523,12H21.334a2.885,2.885,0,0,0-2.885,2.885v2.16H15.012A6.19,6.19,0,0,0,8.83,23.227V38.772a6.19,6.19,0,0,0,6.182,6.182H40.845a6.19,6.19,0,0,0,6.182-6.182V23.243A6.19,6.19,0,0,0,40.845,17.061ZM20.922,14.9a.42.42,0,0,1,.412-.429H34.523a.42.42,0,0,1,.412.412v2.16H20.922ZM11.3,23.243a3.709,3.709,0,0,1,3.709-3.709H40.845a3.709,3.709,0,0,1,3.709,3.709v1.121A5.366,5.366,0,0,1,39.2,29.722H32.05V28.279a2.885,2.885,0,0,0-2.885-2.885H26.692a2.885,2.885,0,0,0-2.885,2.885v1.475H16.661A5.366,5.366,0,0,1,11.3,24.4Zm18.274,9.982a.42.42,0,0,1-.412.412H26.692a.42.42,0,0,1-.412-.412V28.279a.42.42,0,0,1,.412-.412h2.473a.42.42,0,0,1,.412.412ZM40.845,42.5H15.012A3.709,3.709,0,0,1,11.3,38.789V30.134a7.8,7.8,0,0,0,5.358,2.135h7.146v1a2.885,2.885,0,0,0,2.885,2.885h2.473a2.885,2.885,0,0,0,2.885-2.885v-1.03H39.2a7.8,7.8,0,0,0,5.358-2.1v8.638A3.709,3.709,0,0,1,40.845,42.5Z"
            {...props} />
        </g>
      )
    case "birthday-cake":
      return (
        <g id="noun_Birthday_1866121" transform="translate(-44.872 -32.147)">
          <g transform="translate(45.122 32.475)">
            <path d="M215.017,43.657a4.59,4.59,0,0,0,3.345-1.435,4.878,4.878,0,0,0-.01-6.772l-2.6-2.663a1.028,1.028,0,0,0-1.456-.021l-.021.021-2.612,2.674a4.875,4.875,0,0,0,0,6.761A4.63,4.63,0,0,0,215.017,43.657ZM213.149,36.9l1.868-1.91,1.858,1.9a2.8,2.8,0,0,1,0,3.9,2.571,2.571,0,0,1-3.623.093l-.093-.093A2.8,2.8,0,0,1,213.149,36.9Z"
              transform="translate(-195.92 -32.475)"
              {...props} />
            <path d="M104.068,152.807H95.252v-6.689A3.1,3.1,0,0,0,92.186,143H88a3.091,3.091,0,0,0-3.066,3.117v6.689H76.114a5.152,5.152,0,0,0-5.12,5.182V169.86a.976.976,0,0,0,.96,1.012h1.208l.991,3.252a5.157,5.157,0,0,0,4.934,3.665h22.018a5.182,5.182,0,0,0,4.934-3.665l.991-3.252H108.2a.974.974,0,0,0,.991-.97V157.989A5.152,5.152,0,0,0,104.068,152.807Zm-17.074-6.689a1.032,1.032,0,0,1,.991-1.053h4.2a1.018,1.018,0,0,1,1,1.043v6.7H86.994v-6.689Zm-10.88,8.754h27.944a3.082,3.082,0,0,1,3.056,3.117v5.636a8.363,8.363,0,0,1-3.045-.9,11.427,11.427,0,0,0-9.889,0,9.409,9.409,0,0,1-8.2,0,11.427,11.427,0,0,0-9.889,0,8.363,8.363,0,0,1-3.045.9v-5.636A3.1,3.1,0,0,1,76.114,154.871Zm-3.056,13.936v-3.117a10.748,10.748,0,0,0,3.9-1.084,9.364,9.364,0,0,1,8.176,0,11.472,11.472,0,0,0,9.91,0,8.348,8.348,0,0,1,4.1-.939,8.258,8.258,0,0,1,4.077.939,10.545,10.545,0,0,0,3.9,1.084v3.117Zm31,4.7a3.11,3.11,0,0,1-2.963,2.219H79.077a3.129,3.129,0,0,1-2.963-2.219l-.805-2.632h29.554Z"
              transform="translate(-70.993 -131.591)"
              {...props} />
          </g>
        </g>
      );
    case "person":
      return (
        <path
          d="M42.427,40.952H35.243V35.9a10.772,10.772,0,0,0,5.387-9.317h.449a3.143,3.143,0,0,0,0-6.285h-.449v-.9h-.075l-.3-7.2a.789.789,0,0,0-.01-.1A7.988,7.988,0,0,0,29.208,6L25.176,7.732a7.191,7.191,0,0,0-6.993,7.181.87.87,0,0,0,.009.128l.752,5.26h-.312a3.143,3.143,0,1,0,0,6.285h.449A10.77,10.77,0,0,0,24.469,35.9v5.05H17.285A6.293,6.293,0,0,0,11,47.237v8.081a.9.9,0,0,0,.9.9H47.814a.9.9,0,0,0,.9-.9V47.237A6.293,6.293,0,0,0,42.427,40.952ZM41.08,22.1a1.347,1.347,0,0,1,0,2.694h-.449V22.1ZM25.366,9.526a.888.888,0,0,0,.354-.073l4.195-1.8a6.193,6.193,0,0,1,8.548,4.677l.057,1.373A4.876,4.876,0,0,0,31.5,12.23a3.07,3.07,0,0,1-3.42.106l-.393-.245a4.872,4.872,0,0,0-7.3,2.9l-.233,1.089-.175-1.227A5.394,5.394,0,0,1,25.366,9.526ZM18.632,24.79a1.347,1.347,0,1,1,0-2.694h.449V24.79Zm2.245,1.8V21.293l1.254-5.879a3.078,3.078,0,0,1,4.6-1.8l.393.246a4.86,4.86,0,0,0,5.416-.169,3.079,3.079,0,0,1,4.629,1.315l1.665,6.309v5.272a8.984,8.984,0,0,1-5.816,8.393l-.138.05c-.281.1-.567.187-.855.259l-.136.035a8.775,8.775,0,0,1-.948.169l-.049.007a8.91,8.91,0,0,1-2.075,0l-.049-.007a9,9,0,0,1-.948-.169l-.136-.035a8.82,8.82,0,0,1-.855-.259l-.138-.05a8.812,8.812,0,0,1-.877-.385A8.985,8.985,0,0,1,20.877,26.586Zm6.051,10.36q.234.066.471.121c.159.038.318.074.479.1.18.034.362.059.544.084.147.02.294.043.443.057.259.024.521.035.781.04.07,0,.138.011.209.011s.139-.009.209-.011c.261-.005.522-.016.781-.04.149-.013.3-.037.443-.057.182-.024.364-.049.544-.084.162-.031.321-.066.479-.1s.315-.077.471-.121c.173-.049.345-.1.514-.159.049-.017.1-.029.15-.046v4.737L29.857,45.07l-3.592-3.592V36.741c.049.018.1.03.15.046C26.584,36.844,26.755,36.9,26.928,36.946ZM46.916,54.421H12.8V47.237a4.5,4.5,0,0,1,4.49-4.49h7.709l4.226,4.226a.9.9,0,0,0,1.27,0l4.226-4.226h7.709a4.5,4.5,0,0,1,4.49,4.49Z"
          transform="translate(-10.7 -5.012)"
          fill="#d3d8e0"
          stroke="#d3d8e0"
          stroke-width="0.6"
          {...props} />
      );
    case "grad-cap":
      return (
        <g id="Group_1006" data-name="Group 1006" transform="translate(0 0)">
          <path
            d="M24.276,23.987a1.268,1.268,0,0,0-.3.079L6.65,30.826a1.268,1.268,0,0,0-.805,1.188V42.167a2.112,2.112,0,1,0,2.535,0v-8.3l4.225,1.65v5.8a2.98,2.98,0,0,0,1.333,2.324A8.751,8.751,0,0,0,16.579,44.9a26.574,26.574,0,0,0,7.856,1.056A26.574,26.574,0,0,0,32.29,44.9a8.751,8.751,0,0,0,2.641-1.267,2.98,2.98,0,0,0,1.333-2.324v-5.8l5.954-2.324a1.268,1.268,0,0,0,0-2.363L24.9,24.066A1.268,1.268,0,0,0,24.276,23.987Zm.158,2.627,13.836,5.4L24.434,37.4,10.6,32.014ZM15.14,36.5l8.833,3.446a1.268,1.268,0,0,0,.924,0L33.729,36.5V41.3a1.222,1.222,0,0,1-.33.317,6.8,6.8,0,0,1-1.888.871,24.452,24.452,0,0,1-7.077.937,24.452,24.452,0,0,1-7.077-.937,6.8,6.8,0,0,1-1.888-.871,1.4,1.4,0,0,1-.33-.3Z"
            transform="translate(-5 -23.978)"
            fill="#d3d8e0"
            {...props} />
        </g>
      );
    case "map-location":
      return (
        <g id="Group_996" data-name="Group 996" transform="translate(0.5 0.5)">
          <g id="Group_994" data-name="Group 994">
            <path id="Path_99" data-name="Path 99" 
              d="M29.014,47.647a1,1,0,0,1-.618-.238c-.761-.665-18.4-15.781-18.4-26.1a19.014,19.014,0,0,1,38.027,0c0,10.315-17.635,25.431-18.4,26.1a1,1,0,0,1-.618.238Zm0-43.4A17.081,17.081,0,0,0,11.949,21.314c0,8.366,13.927,21.248,17.065,24.052,3.137-2.8,17.065-15.686,17.065-24.052A17.081,17.081,0,0,0,29.014,4.249Z" 
              transform="translate(-10 -2.3)"
              {...props} />
          </g>
          <g id="Group_995" data-name="Group 995" transform="translate(10.22 10.22)">
            <path id="Path_100" data-name="Path 100" 
              d="M40.294,41.387a8.794,8.794,0,1,1,8.794-8.794,8.8,8.8,0,0,1-8.794,8.794Zm0-15.591a6.845,6.845,0,1,0,6.845,6.845A6.847,6.847,0,0,0,40.294,25.8Z" 
              transform="translate(-31.5 -23.8)"
              {...props} />
          </g>
        </g>
      );
    case "camera":
      return (
        <path 
          d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" 
          {...props}
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
  strokeWidth = "1.0",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
  stroke
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