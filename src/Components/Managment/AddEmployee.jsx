import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import SkipPrevious from '@material-ui/icons/SkipPrevious';
import moment from 'moment';
import { Formik, Form } from 'formik';

import AddExperience from './AddExperience';
import { updateEmployee, addEmployee } from '../../actions/employeeAction';
import { setAllSkills } from '../../actions/skillAction';
import { setAllExperiences } from '../../actions/experienceAction';
import withStyle from './withStyle';
import AddEmployeeSkill from './AddEmployeeSkill';


const AddEmployee = ({
  empId, className, updateEmployee, addEmployee, history, employees,
  skills, setAllSkills, setAllExperiences, experiences,
}) => {
  const employee = employees.find((element) => element._id === empId);
  const initialValues = employee ? { ...employee } : {
    firstName: '', lastName: '', email: '', expYears: '', hireDate: moment(new Date()).format('YYYY-MM-DD'), image: '', bio: '', birthDate: moment(new Date()).format('YYYY-MM-DD'),
  };
  const initialSkills = employee ? employee.skills : [];
  const initialExperiences = employee ? employee.experiences : [];
  const initialImage = employee ? employee.image : null;
  const [imageFile, setImageFile] = useState(initialImage);
  const handleImage = ({ target: { files } }) => {
    setImageFile(files[0]);
  };

  useEffect(() => {
    setAllSkills(initialSkills);
    setAllExperiences(initialExperiences);
  }, []);

  const actionName = empId ? 'Modifier' : 'Ajouter';
  const action = (values) => {
    if (empId) {
      updateEmployee({ ...values, _id: empId });
    } else {
      addEmployee(values);
    }
    history.push('/app/empolyee-managment');
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Nom est obligatoir';
    }
    if (!values.lastName) {
      errors.lastName = 'Prénom est obligatoir';
    }
    if (!values.email) {
      errors.email = 'address email obligatoire';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'address email invalide';
    }
    if (!values.expYears || values.expYears < 0) {
      errors.expYears = 'Années d"experience invalide';
    }
    if (!moment(values.birthDate).isValid() || !moment(values.birthDate).isBefore(new Date())) {
      errors.birthDate = 'Format date invalide';
    }
    if (!moment(values.hireDate).isValid() || !moment(values.hireDate).isBefore(new Date())) {
      errors.hireDate = 'Format date invalide';
    }
    if (!values.bio) {
      errors.bio = 'description obligatoire';
    }
    return errors;
  };

  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => action({
          ...values,
          skills,
          experiences,
        })}
      >
        {({
          handleChange, values: {
            firstName, lastName, email, expYears, hireDate, image, bio, birthDate,
          },
          errors,
          touched,
        }) => (
          <Form>
            <Paper className="main-paper" elevation={1}>
              <Grid container className="sub-container" spacing={24}>
                <Grid item xs={6}>
                  <FilledInput
                    placeholder="Nom"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    className="input"
                    style={{ width: '100%' }}
                  />
                  {errors.firstName && touched.firstName ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.firstName}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    placeholder="Prénom"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    className="input"
                    style={{ width: '100%' }}
                  />
                  {errors.lastName && touched.lastName ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.lastName}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="input"
                    style={{ width: '49%', paddingRight: '50%' }}
                  />
                  {errors.email && touched.email ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.email}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    type="date"
                    name="birthDate"
                    className="input"
                    value={moment(birthDate).format('YYYY-MM-DD')}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">Date de naissance</InputAdornment>}
                    inputProps={{
                      'aria-label': 'Weight',
                    }}
                  />
                  {errors.birthDate && touched.birthDate ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.birthDate}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    placeholder="Année d'experience"
                    name="expYears"
                    value={expYears}
                    onChange={handleChange}
                    className="input"
                    endAdornment={<InputAdornment position="end">Année</InputAdornment>}
                    inputProps={{
                      'aria-label': 'Weight',
                    }}
                  />
                  {errors.expYears && touched.expYears ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.expYears}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    type="date"
                    name="hireDate"
                    className="input"
                    value={moment(hireDate).format('YYYY-MM-DD')}
                    onChange={handleChange}
                    endAdornment={<InputAdornment position="end">Date d'embauche</InputAdornment>}
                    inputProps={{
                      'aria-label': 'Weight',
                    }}
                  />
                  {errors.hireDate && touched.hireDate ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.hireDate}</small>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <FilledInput
                    placeholder="Image"
                    name="image"
                    className="input"
                    value={image}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    id="contained-button-file"
                    style={{ display: 'none' }}
                    onChange={handleImage}
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
                    name="bio"
                    value={bio}
                    onChange={handleChange}
                    multiline
                    rows="3"
                    label="Description"
                    placeholder="Description ..."
                    style={{ width: '80%', paddingRight: '19%' }}
                    variant="filled"
                  />
                  {errors.bio && touched.bio ? (
                    <small style={{ color: 'red', paddingTop: '3px' }}>{errors.bio}</small>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <AddEmployeeSkill />
                </Grid>
                <Grid item xs={12}>
                  <AddExperience />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    fullWidth
                    className="button"
                    onClick={() => history.goBack()}
                  >
                    <SkipPrevious style={{ marginRight: '2px', height: '24px' }} />
                    Annuler
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    className="button"
                    type="submit"
                  >
                    <SaveIcon style={{ marginRight: '2px' }} />
                    {actionName}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddEmployee.propTypes = {
  empId: PropTypes.string,
  className: PropTypes.string,
  history: PropTypes.object,
  employees: PropTypes.array,
  skills: PropTypes.array,
  experiences: PropTypes.array,
  addEmployee: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  setAllSkills: PropTypes.func.isRequired,
  setAllExperiences: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  skills: state.skill.skills,
  experiences: state.experiences.experiences,
});

export default compose(withRouter, withStyle, connect(mapStateToProps,
  {
    updateEmployee, addEmployee, setAllSkills, setAllExperiences,
  }))(AddEmployee);
