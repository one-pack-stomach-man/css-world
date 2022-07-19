import React, { HtmlHTMLAttributes, StyleHTMLAttributes } from 'react';
import styled from 'styled-components';

function SvgAr() {
  const MoveRect = styled.rect`
    animation: move 4s infinite linear;
    @keyframes move {
      0% {
        stroke-dasharray: 0, 200%;
      }
      25% {
        stroke-dasharray: 50%, 150%; 
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dasharray: 50%, 150%;
        stroke-dashoffset: -150%;
      }
    }
  `;

  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="400px"
        height="400px"
      >
        <MoveRect
          
            className="rect-svg rect-svg-move"
            stroke="red"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={4}
            fill="none"
            x="100"
            y="100"
            width="200"
            height="200"
            strokeDasharray={'100 1000'}
          />
        <rect
          className="rect-svg"
          stroke="red"
          strokeWidth={2}
          fill="none"
          x="150"
          y="150"
          width="100"
          height="100"
        />
      </svg>
    </div>
  );
}

export default SvgAr;
