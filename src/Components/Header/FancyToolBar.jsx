/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Logout from '@material-ui/icons/DirectionsRunOutlined';

import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const FancyToolBar = ({
  children, isAuthenticated, logout, openMenu,
}) => {
  const [backGround, togglebackGround] = useState('white');
  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      togglebackGround('black');
    } else {
      togglebackGround('white');
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
      {isAuthenticated
        && (
          <div style={{ cursor: 'pointer' }} onClick={openMenu}>
            <Logo logo={logoName} />
          </div>
        )}
      {children}
      {isAuthenticated && <Logout className="logout" style={{ color }} onClick={() => logout()} />}
    </Toolbar>
  );
};


export default FancyToolBar;
