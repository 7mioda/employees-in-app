/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import randomColor from 'randomcolor';
import moment from 'moment';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AddCircle from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import Test from '../Calender/Calender';

import { getAllClients } from '../../actions/clientAction';
import { getAllProjects } from '../../actions/projectAction';
import ProjectCard from './ProjectCard';
import withStyle from './withStyle';

const ProjectsList = ({ className, projects, getAllProjects }) => {
  useEffect(() => {
    getAllClients();
    getAllProjects();
  }, []);
  const projectsView = projects.map(element => (
		<Grid item xs={2} key={element._id}>
			<ProjectCard project={element} />
		</Grid>
  ));

  const resources = [];
  const events = [];
  projects.forEach((project, index) => {
    resources.push({
      id: `${index}`,
      name: project.name,
    });
    events.push({
      id: index,
      start: moment(project.beginDate).format('YYYY-MM-DD HH:mm:ss'),
      end: moment(project.endDate).format('YYYY-MM-DD HH:mm:ss'),
      resourceId: `${index}`,
      title: project.description,
      showPopover: false,
      bgColor: randomColor({
        luminosity: 'light',
        hue: 'red',
      }),
    });
  });

  return (
		<Paper className={className}>
			<Grid
				container
				style={{ paddingLeft: '5%' }}
				justify="flex-start"
				spacing={16}
			>
				<Test resources={resources} events={events} />
			</Grid>
			<NavLink className="link" to="/app/add-project">
				<AddCircle fontSize="large" className="icon" />
			</NavLink>
			<Grid
				container
				style={{ marginLeft: '1%' }}
				justify="flex-start"
				spacing={16}
			>
				{projectsView}
			</Grid>
		</Paper>
  );
};

ProjectsList.propTypes = {
  className: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  getAllProjects: PropTypes.func.isRequired,
};

const mapStateToprops = state => ({
  projects: state.projects.projects,
});

export default compose(
  withStyle,
  connect(
    mapStateToprops,
    { getAllProjects },
  ),
)(ProjectsList);
