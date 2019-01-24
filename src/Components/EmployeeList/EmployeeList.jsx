/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { getFiltredEmployees } from '../../selectors/employeesSelector';
import EmployeeCardPlaceHolder from '../EmployeeCard/EmployeeCardPlaceHolder';
const EmployeeCard = lazy(() => import('../EmployeeCard/EmployeeCard'));


const EmployeeList = ({ filtredEmployees }) => {
  const emplyeesView = filtredEmployees.map((element) => (

    <Grid item xs={2} key={element._id}>
      <Suspense fallback={<EmployeeCardPlaceHolder />}>
        <EmployeeCard employee={element} />
      </Suspense>
    </Grid>
  ));

  return (
    <Grid container justify="flex-start" spacing={16}>
      { emplyeesView }
    </Grid>
  );
};

EmployeeList.propTypes = {
  filtredEmployees: PropTypes.array.isRequired,
};

const mapStateToprops = (state) => ({
  filtredEmployees: getFiltredEmployees(state),
});


export default connect(mapStateToprops)(EmployeeList);
