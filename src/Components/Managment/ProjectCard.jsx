/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import { removeProject } from '../../actions/projectAction';
import withStyle from './withStyle';

const ProjectCard = ({
  className, project: {
    _id, name, description, client, beginDate, endDate,
  }, removeProject,
}) => (
  <Card className={className}>
    <div className="details">
      <CardContent className="content">
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {client}
        </Typography>
      </CardContent>
      <div className="controls">
        <NavLink onClick={(event) => event.stopPropagation()} style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/app/edit-project/${_id}` }}>  <Edit className="action-icon" /> </NavLink>
        <DeleteOutline className="action-icon" onClick={(event) => { event.stopPropagation(); removeProject(_id); }} />
      </div>
    </div>
    <CardMedia
      className="cover"
      image="/static/images/cards/live-from-space.jpg"
      title="Live from space album cover"
    />
  </Card>
);

ProjectCard.propTypes = {
  className: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
  removeProject: PropTypes.func,
};

const mapStateToProps = (state) => ({
  removeProject: state.projects.removeProjects,
});

export default compose(withStyle, connect(mapStateToProps, { removeProject }))(ProjectCard);
