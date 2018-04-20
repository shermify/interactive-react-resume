import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../components/Arrow';

const Cover = (props) => {
  const { name, title } = props;
  return (
    <div id="home" className="jumbotron cover">
      <div className="container">
        <h1>{name}</h1>
        <p className="lead">{title}</p>
      </div>
      <Arrow />
    </div>);
};

Cover.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Cover.defaultProps = {
  name: '',
  title: '',
};

export default Cover;
