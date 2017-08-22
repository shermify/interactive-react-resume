import React from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = (props) => {
  const { company, date, description } = props;
  return (
    <div className="card" key={company}>
      <div className="card-block">
        <h4 className="card-title">{company}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <div className="card-text text-justify">
          {description.paragraphs.map((paragraph, i) =>
            (<p key={i}>{paragraph}</p>)) // eslint-disable-line react/no-array-index-key
          }
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ExperienceCard;
