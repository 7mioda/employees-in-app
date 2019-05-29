import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyle from './withStyle';

import LoginForm from './LoginForm';

const Login = ({ className }) => (
	<Grid container className={`${className} my-container`}>
		<Grid item xs={12}>
			<img
				src="/images/oyez.jpg"
				alt=""
				style={{ width: '50px', height: '50px', margin: '1%' }}
			/>
		</Grid>
		<Grid item xs={6} style={{ marginTop: '6.5%' }}>
			<img src="/images/oyezlanding.png" alt="" style={{ marginLeft: '25%' }} />
		</Grid>
		<Grid item xs={6} style={{ marginTop: '10%' }}>
			<LoginForm />
		</Grid>
	</Grid>
);

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Login);
