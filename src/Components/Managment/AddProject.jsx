/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

import { addProject, updateProject } from '../../actions/projectAction';
import withStyle from './withStyle';
import { getAllClients } from '../../actions/clientAction';

const AddProject = ({
  className, addProject, clients, getAllClients, projectId, project, updateProject, history,
}) => {
  useEffect(() => {
    getAllClients();
  }, []);

  const clientsItems = clients.map((
    { _id, name }
  ) => (<MenuItem key={_id} value={_id}>{name}</MenuItem>
  ));

  const initialValues = project ? { ...project } : {
    name: '', description: '', beginDate: moment(new Date()).format('YYYY-MM-DD'), endDate: moment(new Date()).format('YYYY-MM-DD'), client: '',
  };
  const actionName = project ? 'Modifier' : 'Ajouter';

  const action = (values) => {
    if (project) {
      updateProject({ ...values, _id: projectId });
    } else {
      addProject(values);
    }
    history.goBack();
  };
  return (
    <Formik initialValues={initialValues}>
      {({
        handleChange, values: {
          name, description, beginDate, endDate, client,
        },
      }) => (
        <div className={className}>
          <Grid container className="sub-container" spacing={24}>
            <Grid item xs={12}>
              <Typography variant="caption">Ajouter un projet</Typography>
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                value={name}
                onChange={handleChange}
                name="name"
                className="input"
                placeholder="Nom du projet"
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <FilledInput
                type="date"
                name="beginDate"
                className="input"
                value={moment(beginDate).format('YYYY-MM-DD')}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">Début du projet</InputAdornment>}
                inputProps={{
                  'aria-label': 'Weight',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                type="date"
                name="endDate"
                className="input"
                value={moment(endDate).format('YYYY-MM-DD')}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">Fin du projet</InputAdornment>}
                inputProps={{
                  'aria-label': 'Weight',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                value={client}
                onChange={handleChange}
                name="client"
                className="input"
                placeholder="Client"
                input={<FilledInput name="age" id="filled-age-simple" />}
              >
                {clientsItems}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                value={description}
                onChange={handleChange}
                multiline
                rows="3"
                style={{ width: '100%' }}
                label="Description"
                placeholder="Description ..."
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <Button size="small">Annuler</Button>
              <Button
                size="small"
                color="primary"
                onClick={() => action({
                  name, description, beginDate, endDate, client,
                })}
              >
                { actionName }
              </Button>
            </Grid>
          </Grid>
        </div>)
      }
    </Formik>
  );
};


AddProject.propTypes = {
  className: PropTypes.string.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  getAllClients: PropTypes.func,
  clients: PropTypes.array.isRequired,
  project: PropTypes.object,
  projectId: PropTypes.string,
};
const mapStateToprops = (state, props) => ({
  addProject: state.projects.addProject,
  updateProject: state.projects.updateProject,
  clients: state.clients.clients,
  getAllClients: state.clients.getAllClients,
  project: state.projects.projects.find((element) => element._id === props.projectId),
});

export default compose(withRouter, withStyle, connect(mapStateToprops, { addProject, getAllClients, updateProject }))(AddProject);
