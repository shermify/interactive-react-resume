import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

const Contact = (props) => {
  const { lead, quoteBy, text, phone, email } = props;
  return (
    <Section id="contact" title="Contact" bgcolor="#f2f2f2" lead={lead} quoteBy={quoteBy}>
      <div>
        <p>{text}</p>
        <p>
          Tel: {phone}<br />
          Email: {email.split('@')[0]}<span style={{ display: 'none' }}>f3hy78Y*&97hy</span>@{email.split('@')[1]}<br />
          <a href="https://linkedin.com/in/dlsherman">Linkedin</a>
        </p>
      </div>
    </Section>
  );
};

Contact.propTypes = {
  lead: PropTypes.string.isRequired,
  quoteBy: PropTypes.string,
  text: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Contact.defaultProps = {
  quoteBy: '',
};


export default Contact;
