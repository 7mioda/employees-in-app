/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import EmployeePhoto from './EmployeePhoto';
import withStyle from './withStyle';

const EmployeeCardPlaceHolder = ({ className }) => (
	<div className={className}>
		<Card className="card">
			<CardActionArea>
				<EmployeePhoto className="media" image="/images/placeholder.gif" />
			</CardActionArea>
			<CardActions>
				<p> </p>
			</CardActions>
		</Card>
	</div>
);

EmployeeCardPlaceHolder.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(EmployeeCardPlaceHolder);
