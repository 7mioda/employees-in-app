/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import shortid from 'shortid';

import { changeSearchKeyWord, changeSearchCriteria } from '../../actions/employeeAction';
import { getSuggestions } from '../../selectors/suggestionsSelector';
import withStyle from './withStyle';


const Search = ({
  className, suggetions, changeSearchKeyWord, changeSearchCriteria,
}) => {
  const [popperNode, setPopperNode] = useState(null);
  const [searchWord, setSearchWord] = useState('');
  const [open, toggleOpen] = useState(suggetions.length > 1);
  const [openCriteria, toggleCriteria] = useState(false);
  const [filter, changeFilter] = useState('Cliquer ici pour changer le filter... ');
  const handleChange = ({ target: { value } }) => {
    setSearchWord(value);
    if (value !== '') {
      changeSearchKeyWord(value);
      toggleOpen(true);
    } else {
      changeSearchKeyWord('');
      toggleOpen(false);
    }
  };

  const changeSearchFilter = (value) => {
    changeSearchCriteria(value);
    const placeholder = value === 'NAME' ? 'chercher par nom... ' : 'charcher par compétence';
    changeFilter(placeholder);
    toggleCriteria(false);
  };

  const handleRequest = (request) => {
    setSearchWord('');
    changeSearchKeyWord(request);
    toggleOpen(false);
  };

  return (
    <div className={className}>
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder={filter}
          className="input-root"
          value={searchWord}
          onClick={() => toggleCriteria(!openCriteria)}
          onChange={handleChange}
          inputRef={(node) => {
            setPopperNode(node);
          }}
        />
      </div>
      <Popper anchorEl={popperNode} style={{ zIndex: '5000' }} open={open}>
        <Paper
          square
          style={{ width: popperNode ? popperNode.clientWidth : null }}
        >
          <MenuList>
            {suggetions.map((suggetion) => <MenuItem key={shortid.generate()} onClick={() => handleRequest(suggetion)} style={{ height: '15px' }}>{suggetion}</MenuItem>)}
          </MenuList>
        </Paper>
      </Popper>
      <Popper open={openCriteria} anchorEl={popperNode} style={{ zIndex: '5000' }} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <MenuList>
                <MenuItem disabled>Filtrer par:</MenuItem>
                <MenuItem onClick={() => changeSearchFilter('NAME')}>par nom</MenuItem>
                <MenuItem onClick={() => changeSearchFilter('SKILLS')}>par compétence</MenuItem>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string.isRequired,
  suggetions: PropTypes.array.isRequired,
};

const mapStateToprops = (state) => ({
  changeSearchKeyWord: state.employees.changeSearchKeyWord,
  changeSearchCriteria: state.employees.changeSearchCriteria,
  suggetions: getSuggestions(state),
});

export default compose(withStyle, connect(mapStateToprops, { changeSearchKeyWord, changeSearchCriteria }))(Search);
