import React from 'react';

const SVG = ({ width = '100%', height = '100%', className = 'PerPageSVG' }) => (
  <svg
    viewBox='0 0 17.7 18.3'
    height={height}
    width={width}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M12,9H9v3H7V9H4V7h3V4h2v3h3V9z' />
  </svg>
);

export default SVG;
