import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
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
import { Form, Formik } from 'formik';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

import { addProject, updateProject } from '../../actions/projectAction';
import withStyle from './withStyle';
import { getAllClients } from '../../actions/clientAction';

const AddProject = ({
  className,
  addProject,
  clients,
  getAllClients,
  projectId,
  project,
  updateProject,
  history,
}) => {
  useEffect(() => {
    getAllClients();
  }, []);

  const clientsItems = clients.map(({ _id, name }) => (
		<MenuItem key={_id} value={_id}>
			{name}
		</MenuItem>
  ));

  const initialValues = project
    ? { ...project }
    : {
      name: '',
      description: '',
      beginDate: moment(new Date()).format('YYYY-MM-DD'),
      endDate: moment(new Date()).format('YYYY-MM-DD'),
      client: '',
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
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nom projet obligatoir';
    }
    if (!moment(values.beginDate).isValid()) {
      errors.beginDate = 'Format date invalide';
    }
    if (!moment(values.endDate).isValid()) {
      errors.endDate = 'Format date invalide';
    }
    if (!moment(values.beginDate).isBefore(values.endDate)) {
      errors.endDate = 'Format date invalide';
      errors.beginDate = 'Format date invalide';
    }
    if (!values.client) {
      errors.client = 'client obligatoir';
    }
    if (!values.description) {
      errors.description = 'description obligatoire';
    }
    return errors;
  };

  return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={({
			  name, description, beginDate, endDate, client,
			}) => action({
			    name,
			    description,
			    beginDate,
			    endDate,
			    client,
			  })
			}
		>
			{({
			  handleChange,
			  values: {
			    name, description, beginDate, endDate, client,
			  },
			  errors,
			  touched,
			}) => (
				<Form className={className}>
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
							{errors.name && touched.name ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>{errors.name}</small>
							) : null}
						</Grid>
						<Grid item xs={6} />
						<Grid item xs={6}>
							<FilledInput
								type="date"
								name="beginDate"
								className="input"
								value={moment(beginDate).format('YYYY-MM-DD')}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">Début du projet</InputAdornment>
								}
								inputProps={{
								  'aria-label': 'Weight',
								}}
							/>
							{errors.beginDate && touched.beginDate ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.beginDate}
								</small>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<FilledInput
								type="date"
								name="endDate"
								className="input"
								value={moment(endDate).format('YYYY-MM-DD')}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">Fin du projet</InputAdornment>
								}
								inputProps={{
								  'aria-label': 'Weight',
								}}
							/>
							{errors.endDate && touched.endDate ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.endDate}
								</small>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<Select
								value={client}
								onChange={handleChange}
								style={{ paddingLeft: '30%' }}
								name="client"
								className="input"
								placeholder="Client"
								input={<FilledInput name="age" id="filled-age-simple" />}
							>
								{clientsItems}
							</Select>
							{errors.client && touched.client ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.client}
								</small>
							) : null}
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
							{errors.description && touched.description ? (
								<small style={{ color: 'red', paddingTop: '3px' }}>
									{errors.description}
								</small>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<Button size="small">Annuler</Button>
							<Button size="small" type="submit" color="primary">
								{actionName}
							</Button>
						</Grid>
					</Grid>
				</Form>
			)}
		</Formik>
  );
};

AddProject.propTypes = {
  className: PropTypes.string.isRequired,
  addProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  getAllClients: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  clients: state.clients.clients,
  project: state.projects.projects.find(
    element => element._id === props.projectId,
  ),
});

export default compose(
  withRouter,
  withStyle,
  connect(
    mapStateToProps,
    { addProject, getAllClients, updateProject },
  ),
)(AddProject);
