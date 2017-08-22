import React from 'react';
import PropTypes from 'prop-types';
import ExperienceCard from '../components/ExperienceCard';
import Section from '../components/Section';

const Experience = (props) => {
  const { lead, quoteBy, experienceList } = props;

  return (
    <Section
      id="experience"
      title="Experience"
      lead={lead}
      quoteBy={quoteBy}
      bgcolor="#f2f2f2"
    >
      {experienceList.map(({ company, date, description }) =>
        <ExperienceCard key={company} {...{ company, date, description }} />)}
    </Section>
  );
};

Experience.propTypes = {
  lead: PropTypes.string,
  quoteBy: PropTypes.string,
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.shape({
        paragraphs: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  ),
};

Experience.defaultProps = {
  lead: '',
  quoteBy: '',
  experienceList: [{
    company: 'None',
    date: 'None',
    description: { paragraphs: ['None'] },
  }],
};

export default Experience;
