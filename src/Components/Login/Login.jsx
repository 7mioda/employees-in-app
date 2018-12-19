import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyle from './withStyle';


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
        <Card className="login-card" raised>
          <CardContent>
            <TextField
              id="standard-with-placeholder"
              label="Email"
              placeholder="email@oyez.fr"
              style={{ width: '98%' }}
              margin="normal"
            />
            <br />
            <TextField
              id="standard-with-placeholder"
              label="Mot de passe"
              type="password"
              margin="normal"
              style={{ width: '98%', marginTop: '3px' }}
            />
            <Button variant="contained" fullWidth className="button"> Login </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Login);
