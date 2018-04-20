import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const MenuItem = props => {
  const linkProps = {
    ...props,
    className: 'nav-link',
    duration: 500,
    smooth: true,
    role: 'menuitem',
    tabIndex: '0',
  };
  return (
    <li className="nav-item">
      <Link {...linkProps}>{props.children}</Link>
    </li>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

MenuItem.defaultProps = {
  children: '',
};

export default MenuItem;
