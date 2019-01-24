/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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


import { updateEmployee, addEmployee } from '../../actions/employeeAction';
import { setAllSkills } from '../../actions/skillAction';
import withStyle from './withStyle';
import AddSkill from './AddSkill';


const AddEmployee = ({
  empId, className, updateEmployee, addEmployee, history, employees, skills, setAllSkills,
}) => {
  const employee = employees.find((element) => element._id === empId);
  const initialValues = employee ? { ...employee } : {
    firstName: '', lastName: '', email: '', expYears: '', hireDate: moment(new Date()).format('YYYY-MM-DD'), image: '', bio: '',
  };
  const initaiSkills = employee ? employee.skills : [];
  const initailimage = employee ? employee.image : null;
  const [imageFile, setImageFile] = useState(initailimage);
  const handleImage = ({ target: { files } }) => {
    setImageFile(files[0]);
  };

  useEffect(() => setAllSkills(initaiSkills), []);

  const actionName = empId ? 'Modifier' : 'Ajouter';
  const action = (values) => {
    if (empId) {
      updateEmployee({ ...values, _id: empId });
    } else {
      addEmployee(values);
    }
    history.push('/app/empolyee-managment');
  };
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
      >
        {({
          handleChange, values: {
            firstName, lastName, email, expYears, hireDate, image, bio,
          },
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
                </Grid>
                <Grid item xs={12}>
                  <FilledInput
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="input"
                    style={{ width: '49%' }}
                  />
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
                    style={{ width: '80%' }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <AddSkill />
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
                    onClick={() => action({
                      firstName, lastName, email, expYears, hireDate, image: imageFile, bio, skills,
                    })}
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
  addEmployee: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  setAllSkills: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  employees: state.employees.employees,
  skills: state.skill.skills,
  addEmployee: state.employees.addEmployee,
  updateEmployee: state.employees.updateEmployee,
  setAllSkills: state.skill.setAllSkills,
});

export default compose(withRouter, withStyle, connect(mapStateToprops, { updateEmployee, addEmployee, setAllSkills }))(AddEmployee);
