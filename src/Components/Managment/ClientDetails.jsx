import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import AddClient from './AddClient';
import getFilteredProjects from '../../selectors/projectsSelector';
import ProjectCard from './ProjectCard';
import withStyle from './withStyle';

const ClientDetails = (props) => {
  const { client, projects, className } = props;
  const projectsView = projects.map(element => (
		<Grid item xs={2} key={element._id}>
			<ProjectCard project={element} />
		</Grid>
  ));
  return (
		<div className={className}>
			<AddClient clientId={client._id} />
			<Grid container style={{ padding: '4%' }} justify="flex-start" spacing={24}>
				{projectsView}
			</Grid>
		</div>
  );
};

ClientDetails.propTypes = {
  client: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  projects: getFilteredProjects(state, props),
  client: state.clients.clients.find(client => client._id === props.clientId),
});

export default compose(
  withStyle,
  connect(mapStateToProps),
)(ClientDetails);
