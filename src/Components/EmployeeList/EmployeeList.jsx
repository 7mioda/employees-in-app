import React, { lazy, Suspense } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import getFilteredEmployees from '../../selectors/employeesSelector';
import EmployeeCardPlaceHolder from '../EmployeeCard/EmployeeCardPlaceHolder';

const EmployeeCard = lazy(() => import('../EmployeeCard/EmployeeCard'));

const EmployeeList = ({ filteredEmployees }) => {
  const employeesView = filteredEmployees.map(element => (
		<Grid item xs={2} key={element._id}>
			<Suspense fallback={<EmployeeCardPlaceHolder />}>
				<EmployeeCard employee={element} />
			</Suspense>
		</Grid>
  ));

  return (
		<Grid container justify="flex-start" spacing={16}>
			{employeesView}
		</Grid>
  );
};

const mapStateToProps = state => ({
  filteredEmployees: getFilteredEmployees(state),
});

EmployeeList.propTypes = {
  filteredEmployees: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(EmployeeList);
