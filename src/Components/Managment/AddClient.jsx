/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';


import { addClient, updateClient } from '../../actions/clientAction';
import withStyle from './withStyle';


const AddClient = ({
  className, addClient, updateClient, clientId, client, history,
}) => {
  const initialValues = client ? { ...client } : {
    name: '', description: '', beginDate: moment(new Date()).format('YYYY-MM-DD'), endDate: moment(new Date()).format('YYYY-MM-DD'), client: '',
  };

  const [logo, setLogo] = useState('');
  const handleLogo = ({ target: { files } }) => {
    setLogo(files[0]);
  };

  const actionName = client ? 'Modifier' : 'Ajouter';

  const action = (values) => {
    if (client) {
      updateClient({ ...values, _id: clientId });
    } else {
      addClient(values);
    }
    history.push('/app/clients-managment');
  };
  return (
    <Formik initialValues={initialValues}>
      {({
        handleChange, values: {
          name, link, description,
        },
      }) => (
        <div className={className}>
          <Grid container className="sub-container" spacing={24}>
            <Grid item xs={12}>
              <Typography variant="caption">Ajouter un Client</Typography>
            </Grid>
            <Grid item xs={12}>
              <FilledInput
                value={name}
                onChange={handleChange}
                name="name"
                className="input"
                placeholder="Client"
                style={{ width: '98%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FilledInput
                value={link}
                onChange={handleChange}
                name="link"
                className="input"
                placeholder="Lien"
                style={{ width: '98%' }}
              />
            </Grid>
            <Grid item xs={8}>
              <FilledInput
                placeholder="Logo"
                name="image"
                className="input"
                value={logo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <input
                id="contained-button-file"
                style={{ display: 'none' }}
                onChange={handleLogo}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                value={description}
                onChange={handleChange}
                multiline
                rows="3"
                label="Description"
                placeholder="Description ..."
                style={{ width: '80%' }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="small">Annuler</Button>
              <Button
                size="small"
                color="primary"
                onClick={() => action({
                  name, description, link, logo,
                })}
              > { actionName }
              </Button>
            </Grid>
          </Grid>
        </div>)
      }
    </Formik>
  );
};


AddClient.propTypes = {
  className: PropTypes.string.isRequired,
  addClient: PropTypes.func.isRequired,
  updateClient: PropTypes.func.isRequired,
  clientId: PropTypes.string,
  client: PropTypes.object,
  history: PropTypes.object,
};
const mapStateToprops = (state, props) => ({
  addClient: state.clients.addClient,
  updateClient: state.clients.updateClient,
  client: state.clients.clients.find((client) => client._id === props.clientId),
});

export default compose(withRouter, withStyle,
  connect(mapStateToprops, { addClient, updateClient }))(AddClient);
