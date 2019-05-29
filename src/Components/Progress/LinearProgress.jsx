import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './withStyle';

const FancyLinearProgress = ({ isFetching, classes }) => (
	<div>
		{isFetching && (
			<LinearProgress
				classes={{
				  colorPrimary: classes.linearColorPrimary,
				  barColorPrimary: classes.linearBarColorPrimary,
				}}
				style={{ zIndex: '100000' }}
			/>
		)}
	</div>
);

FancyLinearProgress.propTypes = {
  classes: PropTypes.any.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default withStyles(styles)(FancyLinearProgress);
