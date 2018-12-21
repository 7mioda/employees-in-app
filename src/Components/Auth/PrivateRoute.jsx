import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      isAuthenticated
        ? <Component {...rest} />
        : <Redirect to="/login" />
    )}
  />
);


export default PrivateRoute;
