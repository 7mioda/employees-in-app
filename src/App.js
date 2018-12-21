/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authorise } from './actions/authAction';
import Login from './Components/Login/Login';


const App = ({ authorise }) => (
  <div>
    <Login authorise={authorise} />
  </div>
);

App.propTypes = {
  authorise: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  isAuthenticated: state.isAuthenticated,
  authorise: state.authorise,
});

export default connect(mapStateToprops, { authorise })(App);
