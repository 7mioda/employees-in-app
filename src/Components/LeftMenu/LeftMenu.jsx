import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import AllInbox from '@material-ui/icons/AllInbox';
import Work from '@material-ui/icons/Work';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ViewModule from '@material-ui/icons/ViewModule';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import SkillIcon from '@material-ui/icons/HowToReg';

import { closeMenu } from '../../actions/uiAction';

const LeftMenu = ({ leftMenu, closeMenu }) => (
	<Drawer variant="persistent" open={leftMenu} anchor="left">
		<div>
			<IconButton>
				<ChevronLeftIcon onClick={closeMenu} />
			</IconButton>
		</div>
		<Divider />
		<List>
			<NavLink to="/app/employee-list" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<ViewModule />
					</ListItemIcon>
					<ListItemText primary="View Modification" />
				</ListItem>
			</NavLink>
			<NavLink to="/app/empolyee-managment" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
			</NavLink>
			<NavLink to="/app/clients-managment" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<Work />
					</ListItemIcon>
					<ListItemText primary="Clients" />
				</ListItem>
			</NavLink>
			<NavLink to="/app/projects-managment" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<AllInbox />
					</ListItemIcon>
					<ListItemText primary="Projets" />
				</ListItem>
			</NavLink>
			<NavLink to="/app/empolyee-managment" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<SupervisorAccount />
					</ListItemIcon>
					<ListItemText primary="Employées" />
				</ListItem>
			</NavLink>
			<NavLink to="/app/skill-managment" style={{ textDecoration: 'none' }}>
				<ListItem button>
					<ListItemIcon>
						<SkillIcon />
					</ListItemIcon>
					<ListItemText primary="Compétences" />
				</ListItem>
			</NavLink>
		</List>
	</Drawer>
);

LeftMenu.propTypes = {
  leftMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  leftMenu: state.ui.leftMenu,
});

export default connect(
  mapStateToProps,
  { closeMenu },
)(LeftMenu);
