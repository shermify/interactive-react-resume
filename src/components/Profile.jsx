import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

const Profile = props => {
  const { lead, description, strengths } = props;
  const content = (
    <div>
      <div className="profile-description">
        {description.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <h3>Key Strengths</h3>
      <ul>
        {strengths.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <Section id="profile" title="Profile" lead={lead}>
      {content}
    </Section>
  );
};

Profile.propTypes = {
  lead: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  strengths: PropTypes.arrayOf(PropTypes.string),
};

Profile.defaultProps = {
  lead: '',
  description: [''],
  strengths: [''],
};

export default Profile;
