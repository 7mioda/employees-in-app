import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

import { getAllProjects } from '../../actions/projectAction';
import { addExperience } from '../../actions/experienceAction';
import withStyle from './withStyle';

const ExperienceForm = ({ className, projects, addExperience }) => {
  useEffect(() => {
    getAllProjects();
  }, []);

  const onSubmit = (values) => {
    const {
      position, description, beginDate, endDate, project,
    } = values;
    addExperience({
      position,
      description,
      beginDate,
      endDate,
      project,
    });
  };

  const projectsItems = projects.map(({ _id, name }) => (
		<MenuItem key={_id} value={_id}>
			{name}
		</MenuItem>
  ));

  const initialValues = {
    poste: '',
    description: '',
    beginDate: moment(new Date()).format('YYYY-MM-DD'),
    endDate: moment(new Date()).format('YYYY-MM-DD'),
    project: '',
  };

  return (
		<Formik initialValues={initialValues} onSubmit={values => onSubmit(values)}>
			{({
			  handleChange,
			  values: {
			    position, description, beginDate, endDate, project,
			  },
			}) => (
				<div className={className}>
					<Grid container className="sub-container" spacing={24}>
						<Grid item xs={6}>
							<FilledInput
								value={position}
								onChange={handleChange}
								name="position"
								className="input"
								placeholder="Fonction"
							/>
						</Grid>
						<Grid item xs={6}>
							<Select
								value={project}
								onChange={handleChange}
								name="project"
								className="input"
								placeholder="Project"
								input={<FilledInput name="age" id="filled-age-simple" />}
							>
								{projectsItems}
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
						</Grid>
						<Grid item xs={6}>
							<Button size="small">Annuler</Button>
							<Button size="small" color="primary" type="submit">
								Ajouter
							</Button>
						</Grid>
					</Grid>
				</div>
			)}
		</Formik>
  );
};

ExperienceForm.propTypes = {
  className: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  addExperience: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  projects: state.projects.projects,
});

export default compose(
  withStyle,
  connect(
    mapStateToProps,
    { addExperience },
  ),
)(ExperienceForm);
