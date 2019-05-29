/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import { logout } from '../../actions/authAction';
import { openMenu } from '../../actions/uiAction';
import FancyToolbar from './FancyToolBar';
import Search from './Search';
import withStyle from './withStyle';

const Header = ({
  className, isAuthenticated, logout, openMenu,
}) => (
  <div className={className}>
    <AppBar position="fixed" className="app-bar">
      <FancyToolbar
        isAuthenticated={isAuthenticated}
        openMenu={openMenu}
        logout={logout}
      >
        <Search />
      </FancyToolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  logout: state.auth.logout,
  openMenu: state.ui.openMenu,
});

export default compose(
  withStyle,
  connect(
    mapStateToprops,
    { logout, openMenu },
  ),
)(Header);
