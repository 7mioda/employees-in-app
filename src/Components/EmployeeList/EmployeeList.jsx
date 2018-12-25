/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import EmployeeCard from '../EmployeeCard/EmployeeCard';


class EmployeeList extends PureComponent {
  componentDidMount() {
    const { getAllEmployees } = this.props;
    getAllEmployees();
  }


  render() {
    const { filtredEmployees } = this.props;
    const emplyeesView = filtredEmployees.map((element) => (
      <Grid item key={element._id}>
        <EmployeeCard employee={element} />
      </Grid>
    ));
    return (
      <Grid container justify="center" spacing={16}>
        { emplyeesView }
      </Grid>
    );
  }
}

EmployeeList.propTypes = {
  filtredEmployees: PropTypes.array.isRequired,
  getAllEmployees: PropTypes.func.isRequired,
};

export default EmployeeList;
