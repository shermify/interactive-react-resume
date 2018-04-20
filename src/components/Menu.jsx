import React from 'react';
import PropTypes from 'prop-types';
import ToggleIcon from '../images/icons/menu.svg';
import MenuItem from './MenuItem';

const Nav = (props) => {
  const { toggle, collapsed, offset } = props;

  return (
    <div className="menu">
      <div className="animate-nav" style={{ maxHeight: collapsed ? '55px' : '300px' }} >
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler mb-3" type="button" onClick={toggle}>
            <ToggleIcon className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse show" id="navbarNav" >
            <ul className="navbar-nav">
              <MenuItem to="home" {...{ offset, onClick: toggle }}>Home</MenuItem>
              <MenuItem to="profile" {...{ offset, onClick: toggle }}>Profile</MenuItem>
              <MenuItem to="experience" {...{ offset, onClick: toggle }}>Experience</MenuItem>
              <MenuItem to="skills" {...{ offset, onClick: toggle }}>Skills</MenuItem>
              <MenuItem to="contact" {...{ offset, onClick: toggle }}>Contact</MenuItem>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

Nav.propTypes = {
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Nav;
