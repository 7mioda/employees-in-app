import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import withStyle from './withStyle';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    if (window.scrollY > 80) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: 'white' });
    }
  }


  render() {
    const { className } = this.props;
    const { color } = this.state;
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
  }
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Header);
