/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import withStyle from './withStyle';
import AddSkill from './AddSkill';
import { updateEmployee, addEmployee, getEmployee } from '../../api/employee';

class AddEmployee extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      image: null,
      bio: '',
      hireDate: null,
      skills: [],
      expYears: 0,
    };
  }

  componentDidMount = async () => {
    const { empId } = this.props;
    if (empId) {
      const employee = await getEmployee(empId);
      this.setState({
        ...employee,
      });
    }
  }

    handleChange = async (event) => {
      const { target: { value, name } } = event;
      await this.setState({ [name]: value });
    }

    updateSkills = (newSkills) => {
      this.setState({ skills: [...newSkills] });
    }

    addEmployee = async () => {
      const { ...employee } = this.state;
      const { history } = this.props;
      await addEmployee(employee);
      history.goBack();
    }

    updateEmployee = async () => {
      const { ...employee } = this.state;
      const { history } = this.props;
      await updateEmployee(employee);
      history.goBack();
    }

    render() {
      const { empId, className } = this.props;
      const action = empId ? this.updateEmployee : this.addEmployee;
      const actionName = empId ? 'Modifier' : 'Ajouter';
      const {
        firstName, lastName, email, bio, skills, expYears, hireDate, image,
      } = this.state;
      return (
        <div className={className}>
          <Paper className="main-paper" elevation={1}>
            <Grid container className="sub-container" spacing={24}>
              <Grid item xs={6}>
                <FilledInput
                  placeholder="Nom"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  className="input"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <FilledInput
                  placeholder="Prénom"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  className="input"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FilledInput
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="input"
                  style={{ width: '49%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <FilledInput
                  placeholder="Année d'experience"
                  name="expYears"
                  value={expYears}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  onChange={this.handleChange}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  id="contained-button-file"
                  style={{ display: 'none' }}
                  onChange={(event) => { this.setState({ image: event.target.files[0] }); }}
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
                  onChange={this.handleChange}
                  multiline
                  rows="3"
                  label="Description"
                  placeholder="Description ..."
                  style={{ width: '80%' }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <AddSkill skills={skills} updateSkills={this.updateSkills} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  className="button"
                  onClick={action}
                >
                  {actionName}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
}

AddEmployee.propTypes = {
  empId: PropTypes.string,
  className: PropTypes.string,
  history: PropTypes.object,
};

export default compose(withRouter, withStyle)(AddEmployee);
