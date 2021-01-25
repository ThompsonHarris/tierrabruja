import React from 'react';

const SVG = ({ width = '100%', height = '100%', className = 'PerPageSVG' }) => (
  <svg
  viewBox="0 0 1400 74"
    height={height}
    width={width}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
  <path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z" />
  </svg>
);

export default SVG;

