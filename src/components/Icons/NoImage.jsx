import React from 'react';

const SVG = ({
  width = '100%',
  height = '100%',
  className = 'noPictureSVG',
}) => (
  <svg
    viewBox='0 0 288 267.5'
    height={height}
    width={width}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g>
      <polygon points='156.3,170.8 107,146.1 33,220.1 33,244.8 255,244.8 255,146.1 205.7,121.4 	' />
      <path
        d='M33,22.8v164.4l74-74l49.3,24.7l49.3-49.3l49.3,24.7V22.8H33z M87.7,94.1C76.8,94.1,68,85.3,68,74.5
		c0-10.9,8.8-19.7,19.7-19.7c10.9,0,19.7,8.8,19.7,19.7C107.3,85.3,98.5,94.1,87.7,94.1z'
      />
    </g>
  </svg>
);

export default SVG;
