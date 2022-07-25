import React from 'react';

function CircleText() {
  return (
    <div>
      <div className="circle-word">
        <svg
          width="400px"
          height="300px"
          viewBox="0 0 400 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 100 50 a 50 50 0 1 1 0 1 z" fill='none' id="circle"></path>
          {/* <path d="M 100 50 h 120 v 80 h -80 v -80 z" fill='none' id="circle"></path> */}
          <text fill="red">
            <textPath
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#circle"
            >
              circle text -------------- circle text
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default CircleText;
