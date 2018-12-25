import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import withStyle from './withStyle';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      criteria: 'NAME',
      open: false,
    };
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  setCriteria = (criteria) => {
    this.setState({ criteria });
    this.handleClose();
  }

  listenScrollEvent = () => {
    if (window.scrollY > 80) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: 'white' });
    }
  }

  handleChange = (event) => {
    const { changeSearchCriteria } = this.props;
    const { criteria } = this.state;
    const { target: { value } } = event;
    changeSearchCriteria({
      criteria,
      value,
    });
  }


  render() {
    const { className } = this.props;
    const { color, open } = this.state;
    const logo = color === 'white'
      ? <img src="/images/oyez.jpg" alt="" style={{ width: '50px !important', height: '50px' }} />
      : <img src="/images/oyez_white.png" alt="" style={{ width: '50px !important', height: '50px' }} />;
    return (
      <div className={className}>
        <AppBar position="fixed" style={{ backgroundColor: color }}>
          <Toolbar>
            {logo }
            <div className="search">
              <div className="search-icon">
                <IconButton
                  buttonRef={(node) => {
                    this.anchorEl = node;
                  }}
                  onClick={this.handleClose}
                >
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder="Search…"
                className="input-root"
                onChange={this.handleChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Popper open={open} anchorEl={this.anchorEl} style={{ zIndex: '5000' }} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <MenuList>
                  <MenuItem onClick={() => this.setCriteria('NAME')}>par nom</MenuItem>
                  <MenuItem onClick={() => this.setCriteria('SKILLS')}>par compétence</MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
  changeSearchCriteria: PropTypes.func.isRequired,
};

export default withStyle(Header);
