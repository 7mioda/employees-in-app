import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ViewModule from '@material-ui/icons/ViewModule';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

import { closeMenu } from '../../actions/uiAction';

const LeftMenu = ({ leftMenu, closeMenu }) => (
  <Drawer
    variant="persistent"
    open={leftMenu}
    anchor="left"
  >
    <div>
      <IconButton>
        <ChevronLeftIcon onClick={closeMenu} />
      </IconButton>
    </div>
    <Divider />
    <List>
      <NavLink to="/app/empolyee-managment" style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>
      <NavLink to="/app/employee-list" style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon><ViewModule /></ListItemIcon>
          <ListItemText primary="View Modification" />
        </ListItem>
      </NavLink>
    </List>
  </Drawer>
);

const mapStateToprops = (state) => ({
  leftMenu: state.ui.leftMenu,
  closeMenu: state.ui.closeMenu,

});

export default connect(mapStateToprops, { closeMenu })(LeftMenu);
