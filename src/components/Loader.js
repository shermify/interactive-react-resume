import React from 'react';
import PropTypes from 'prop-types';
import LoaderImage from '../images/icons/loader.svg';

const Loader = (props) => {
  const loaderStyle = {
    height: '312px',
    textAlign: 'center',
    paddingTop: '50px',
    display: props.visible ? 'block' : 'none',
  };

  return (
    <div style={loaderStyle}><LoaderImage /></div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
