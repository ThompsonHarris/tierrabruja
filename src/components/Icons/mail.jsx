import React from 'react';

const SVG = ({ width = '100%', height = '100%', className = 'logoSVG' }) => (
  <svg
    viewBox='0 0 288 202.8'
    height={height}
    width={width}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
  <polygon points="29.8,29.5 252,29.5 137.4,116.6 "/>
  <polygon points="29.8,156 101.9,96 138,124 175,96 251.7,155.7 "/>
  <polygon points="29.8,147.2 96.3,90.2 29.8,36.9 "/>
  <polygon points="251.7,147.2 180,90.8 251.7,36.9 "/>
  </svg>
);

export default SVG;
