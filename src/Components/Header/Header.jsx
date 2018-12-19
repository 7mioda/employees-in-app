import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import withStyle from './withStyle';


const Header = ({ className }) => (
  <div className={className}>
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <img src="/images/oyez.jpg" alt="" style={{ width: '50px !important', height: '50px' }} />
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className="input-root"
          />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Header);