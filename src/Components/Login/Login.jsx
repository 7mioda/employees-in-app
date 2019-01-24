/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import withStyle from './withStyle';

import LoginForm from './LoginForm';


const Login = ({ className }) => (
  <div className={className}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <img
          src="/images/oyez.jpg"
          alt=""
          style={{ width: '50px', height: '50px', margin: '1%' }}
        />
      </Grid>
      <Grid item xs={6} style={{ marginTop: '6.5%' }}>
        <img
          src="/images/oyezlanding.png"
          alt=""
          style={{ marginLeft: '25%' }}
        />
      </Grid>
      <Grid item xs={6} style={{ marginTop: '10%' }}>
        <LoginForm />
      </Grid>
    </Grid>
  </div>
);


Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default compose(withRouter, withStyle)(Login);
