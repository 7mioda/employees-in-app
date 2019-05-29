import React from 'react';
import * as Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={() => (isAuthenticated ? <Component {...rest} /> : <Redirect to="/login" />)
		}
	/>
);

PrivateRoute.propTypes = {
  component: Proptypes.element.isRequired,
  isAuthenticated: Proptypes.bool.isRequired,
};

export default PrivateRoute;
