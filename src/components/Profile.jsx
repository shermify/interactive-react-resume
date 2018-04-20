import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/Section';
import MapMarker from '../images/icons/map-marker.svg';
import Person from '../images/icons/person.svg';
import Thumb from '../images/icons/thumb-up.svg';
import github from '../images/logos/github.png';
import linkedin from '../images/logos/linkedin.png';

const iconStyle = {
  height: '14px',
  width: '14px',
  marginRight: '8px',
  fill: '#4d004d',
};

const Profile = (props) => {
  const { profile, headshot } = props;
  const content = (
    <div>
      {profile.description}
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 col-md-6 order-lg-1 mt-5">
          <h3>Details</h3>
          <div>
            <ul className="list-unstyled">
              <li><Person style={iconStyle} />Name: Daniel Sherman</li>
              <li><MapMarker style={iconStyle} />Location: Chicago</li>
              <li><Thumb style={iconStyle} />Education: B.S. Biochemistry
              Northern Illinois University</li>
            </ul></div>
        </div>
        <div className="col-lg-4 col-md-6 order-lg-3 mt-5">
          <h3>Links</h3>
          <ul className="list-unstyled">
            <li><a href="https://linkedin.com/in/dlsherman"><img src={linkedin} alt="Linkedin Logo" style={iconStyle} />Linkedin</a></li>
            <li><img src={github} alt="Github Logo" style={iconStyle} /><a href="https://github.com/shermify/interactive-react-resume">Github</a></li>
            <li><a href="https://shermify.com">https://shermify.com</a></li>
          </ul>
        </div>
        <div className="col-lg-4 order-lg-2 mt-5">
          <img src={headshot} alt="Daniel Sherman" />
        </div>
      </div>
    </div>
  );

  return (
    <Section id="profile" title="Profile" lead={profile.lead}>
      {content}
    </Section>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    lead: PropTypes.string,
    description: PropTypes.string,
  }),
  headshot: PropTypes.string,
};

Profile.defaultProps = {
  profile: {
    lead: '',
    description: '',
  },
  headshot: '',
};

export default Profile;
