import React from 'react';
import { Link } from 'react-scroll';

const Arrow = () => (
  <Link to="profile" className="arrow-link" smooth offset={-50} duration={500}>
    <svg className="arrows">
      <path className="a1" d="M0 0 L50 12 L100 0" />
      <path className="a2" d="M0 15 L50 27 L100 15" />
      <path className="a3" d="M0 30 L50 42 L100 30" />
    </svg>
  </Link>
);
export default Arrow;
