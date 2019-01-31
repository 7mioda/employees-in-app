/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AddCircle from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';


import { getAllProjects } from '../../actions/projectAction';
import ProjectCard from './ProjectCard';
import withStyle from './withStyle';

const ProjectsManagment = ({ className, projects, getAllProjects }) => {
  useEffect(() => {
    getAllProjects();
  }, []);
  const projectsView = projects.map((element) => (
    <Grid item xs={2} key={element._id}>
      <ProjectCard project={element} />
    </Grid>
  ));

  return (
    <Paper className={className}>
      <NavLink className="link" to="/app/add-project">
        <AddCircle fontSize="large" className="icon" />
      </NavLink>
      <Grid container justify="flex-start" spacing={16}>
        { projectsView }
      </Grid>
    </Paper>
  );
};

const mapStateToprops = (state) => ({
  projects: state.projects.projects,
  getAllProjects: state.projects.getAllProjects,
});


export default compose(withStyle, connect(mapStateToprops, { getAllProjects }))(ProjectsManagment);
