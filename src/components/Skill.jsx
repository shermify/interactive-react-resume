import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../images/logos/defaultSkill.png';

const Skill = props => {
  const { size, label, img } = props;
  return (
    <div className="skill">
      <div className="row">
        <div className="col">
          <img src={img} alt={label} height="45px" width="45px" />
          <p style={{ width: size }}>{label}</p>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  label: PropTypes.string, // label for the chart
  size: PropTypes.number, // diameter of chart
  img: PropTypes.string,
};
Skill.defaultProps = {
  label: '',
  size: 116,
  img: defaultImage,
};

export default Skill;
