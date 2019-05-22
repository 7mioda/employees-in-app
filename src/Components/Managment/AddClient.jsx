/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Form, Formik } from 'formik';
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

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nom client obligatoir';
    }
    if (!values.link) {
      errors.link = 'Lien obligatoir';
    }
    if (!values.description) {
      errors.description = 'description obligatoire';
    }
    return errors;
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
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={({ name, description, link }) => action({
        name, description, link, logo,
      })}
    >
      {({
        handleChange, values: {
          name, link, description,
        },
        errors,
        touched,
      }) => (
        <Form className={className}>
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
              {errors.name && touched.name ? (
                <small style={{ color: 'red', paddingTop: '3px' }}>{errors.name}</small>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <FilledInput
                value={link}
                onChange={handleChange}
                name="link"
                className="input"
                placeholder="Lien"
                style={{ width: '98%', paddingRight: '1%' }}
              />
              {errors.link? (
                <small style={{ color: 'red', paddingTop: '3px' }}>{errors.link}</small>
              ) : null}
            </Grid>
            <Grid item xs={8}>
              <FilledInput
                placeholder="Logo"
                name="image"
                className="input"
                value={logo}
                onChange={handleChange}
              />
              {errors.image && touched.image ? (
                <small style={{ color: 'red', paddingTop: '3px' }}>{errors.image}</small>
              ) : null}
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
                style={{ width: '80%', paddingRight: '19%' }}
                variant="filled"
              />
              {errors.description && touched.description ? (
                <small style={{ color: 'red', paddingTop: '3px' }}>{errors.description}</small>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Button size="small">Annuler</Button>
              <Button
                size="small"
                type="submit"
                color="primary"
              > { actionName }
              </Button>
            </Grid>
          </Grid>
        </Form>)
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
const mapStateToProps = (state, props) => ({
  client: state.clients.clients.find((client) => client._id === props.clientId),
});

export default compose(withRouter, withStyle,
  connect(mapStateToProps, { addClient, updateClient }))(AddClient);
