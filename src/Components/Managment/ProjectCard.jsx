import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import { removeProject } from '../../actions/projectAction';
import withStyle from './withStyle';

const ProjectCard = ({
  className,
  project: { _id, name },
  client,
  removeProject,
}) => (
	<Card className={className}>
		<div className="details">
			<div className="controls">
				<img style={{ height: '25px', width: '25px' }} src={client.logo} alt="" />
			</div>
			<CardContent className="content">
				<Typography component="h5" variant="h5">
					{name}
				</Typography>
				<Typography variant="subtitle1" color="textSecondary">
					{client.name}
				</Typography>
			</CardContent>
			<div className="controls">
				<NavLink
					onClick={event => event.stopPropagation()}
					style={{ textDecoration: 'none', color: 'inherit' }}
					to={{ pathname: `/app/edit-project/${_id}` }}
				>
					<Edit className="action-icon" />
				</NavLink>
				<DeleteOutline
					className="action-icon"
					onClick={(event) => {
					  event.stopPropagation();
					  removeProject(_id);
					}}
				/>
			</div>
		</div>
	</Card>
);

ProjectCard.propTypes = {
  className: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  removeProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  client: state.clients.clients.find(
    client => client._id === props.project.client,
  ),
});

export default compose(
  withStyle,
  connect(
    mapStateToProps,
    { removeProject },
  ),
)(ProjectCard);
