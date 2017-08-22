import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

const SkillArea = (props) => {
  const { skills, images } = props;
  return (
    <div style={{ textAlign: 'center', margin: '30px 0 30px 0' }}>
      {skills.map(skill => (
        <Skill
          key={skill.name}
          label={skill.name}
          percent={skill.percent}
          img={images[skill.image]}
        />
      ))}
    </div>
  );
};

SkillArea.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    percent: PropTypes.number,
    img: PropTypes.string,
  })).isRequired,
  images: PropTypes.objectOf(PropTypes.string),
};

SkillArea.defaultProps = {
  images: { },
};

export default SkillArea;
