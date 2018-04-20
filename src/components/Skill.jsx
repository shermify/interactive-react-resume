import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../images/logos/defaultSkill.png';

const Skill = props => {
  const { size, percent, label, img } = props;
  return (
    <div className="skill">
      <div className="row">
        <div className="col">
          <img src={img} alt={label} height="45px" width="45px" />
        </div>
        <div className="col">
          <svg width={size} height="15px">
            <defs>
              <linearGradient id="Gradient1">
                <stop stopColor="blue" offset="0%" />
                <stop stopColor="purple" offset="100%" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100" height="50" fill="lightgray" />
            <rect x="0" y="0" width={percent} height="50" fill="url(#Gradient1)" />
          </svg>
          <p style={{ width: size }}>{label}</p>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  percent: PropTypes.number, // value the chart should show
  label: PropTypes.string, // label for the chart
  size: PropTypes.number, // diameter of chart
  img: PropTypes.string,
};
Skill.defaultProps = {
  percent: 0,
  label: '',
  size: 116,
  img: defaultImage,
};

export default Skill;
