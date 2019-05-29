import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Logout from '@material-ui/icons/DirectionsRunOutlined';

import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const FancyToolBar = ({
  children, isAuthenticated, logout, openMenu,
}) => {
  const [backGround, toggleGround] = useState('white');
  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      toggleGround('black');
    } else {
      toggleGround('white');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const logoName = backGround === 'white' ? 'oyez.jpg' : 'oyez_white.png';
  const color = backGround === 'white' ? 'black' : 'white';
  return (
		<Toolbar style={{ backgroundColor: backGround }}>
			{!isAuthenticated && (
				<NavLink to="/app/employee-list">
					<Logo logo={logoName} />
				</NavLink>
			)}
			{isAuthenticated && (
				// eslint-disable-next-line max-len
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
				<div style={{ cursor: 'pointer' }} onClick={openMenu}>
					<Logo logo={logoName} />
				</div>
			)}
			{children}
			{isAuthenticated && (
				<Logout className="logout" style={{ color }} onClick={() => logout()} />
			)}
		</Toolbar>
  );
};

FancyToolBar.propTypes = {
  children: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default FancyToolBar;
