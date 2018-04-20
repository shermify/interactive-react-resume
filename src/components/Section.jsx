import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  const { id, title, lead, quoteBy, color, bgcolor } = props;
  return (
    <section id={id} style={{ backgroundColor: bgcolor, color }}>
      <div className="container section">
        <h2>{title}</h2>
        <p className="lead">
          {lead}
          <br />
          {quoteBy}
        </p>
        <hr />
        <div>{props.children}</div>
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  quoteBy: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
};

Section.defaultProps = {
  children: <div />,
  quoteBy: '',
  bgcolor: '#fff',
  color: '#333',
};

export default Section;
