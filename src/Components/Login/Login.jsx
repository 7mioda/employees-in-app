import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import withStyle from './withStyle';


const Login = ({ className, authorise }) => (
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
        <Card className="login-card" raised>
          <CardContent>
            <TextField
              id="standard-with-placeholder"
              label="Email"
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
              id="standard-with-placeholder"
              label="Mot de passe"
              type="password"
              margin="normal"
              className="text-field"
              InputProps={{
                endAdornment: (
                  <InputAdornment variant="filled" position="end">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" fullWidth className="button" onClick={authorise}> Login </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

Login.propTypes = {
  authorise: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default withStyle(Login);
