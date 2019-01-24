/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import { Formik, Form } from 'formik';

import { login as loginAction } from '../../actions/authAction';


const Login = ({ isAuthenticated, loginAction }) => {
  if (isAuthenticated) { return <Redirect to="/app/empolyee-managment" />; }
  return (
    <Formik initialValues={{ email: '', password: '' }}>
      {({ handleChange, values: { email, password } }) => (
        <Form>
          <Card className="login-card" raised>
            <CardContent>
              <TextField
                label="Email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="email@oyez.fr"
                className="text-field"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <TextField
                label="Mot de passe"
                type="password"
                margin="normal"
                name="password"
                value={password}
                onChange={handleChange}
                className="text-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment variant="filled" position="end">
                      <VisibilityOff />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                fullWidth
                className="button"
                onClick={() => loginAction({ email, password })}
              >
              Login
              </Button>
            </CardContent>
          </Card>
        </Form>)}
    </Formik>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  authorise: state.auth.authorise,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToprops, { loginAction })(Login);
