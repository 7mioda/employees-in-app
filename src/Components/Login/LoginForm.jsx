/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as PropTypes from 'prop-types';
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
  if (isAuthenticated) {
    return <Redirect to="/app/empolyee-managment" />;
  }
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Mot de passe  obligatoir';
    }
    if (!values.email) {
      errors.email = 'address email obligatoire';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'address email incorrecte';
    }
    return errors;
  };
  return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validate}
			onSubmit={({ email, password }) => loginAction({ email, password })}
		>
			{({
			  handleChange, values: { email, password }, errors, touched,
			}) => (
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
							{errors.email && touched.email ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.email}
								</small>
							) : null}
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
							{errors.password && touched.password ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.password}
								</small>
							) : null}
							<Button variant="contained" fullWidth type="submit" className="button">
								Login
							</Button>
						</CardContent>
					</Card>
				</Form>
			)}
		</Formik>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(Login);
