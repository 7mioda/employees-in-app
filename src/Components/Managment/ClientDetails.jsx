/* eslint-disable no-underscore-dangle */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import AddClient from './AddClient';
import { getFiltredProjects } from '../../selectors/projectsSelector';
import ProjectCard from './ProjectCard';
import withStyle from './withStyle';


const ClientDetails = (props) => {
  const { client, projects, className } = props;
  const projectsView = projects.map((element) => (
    <Grid item xs={2} key={element._id}>
      <ProjectCard project={element} />
    </Grid>
  ));
  return (
    <div className={className}>
      <AddClient clientId={client._id} />
      <Grid container justify="flex-start" spacing={24}>
        {projectsView}
      </Grid>
    </div>
  );
};

ClientDetails.propTypes = {
  client: PropTypes.object.isRequired,
  projects: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  projects: getFiltredProjects(state, props),
  client: state.clients.clients.find((client) => client._id === props.clientId),
});

export default compose(withStyle, connect(mapStateToProps))(ClientDetails);
