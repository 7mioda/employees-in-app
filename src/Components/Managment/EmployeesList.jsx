import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PersonAdd from '@material-ui/icons/PersonAdd';

import EmployeesListRow from './EmployeesListRow';
import { getAllClients } from '../../actions/clientAction';
import { getAllProjects } from '../../actions/projectAction';
import getFilteredEmployees from '../../selectors/employeesSelector';
import withStyle from './withStyle';

const ManagementList = ({
  filtredEmployees,
  className,
  getAllClients,
  getAllProjects,
}) => {
  useEffect(() => {
    getAllClients();
    getAllProjects();
  }, []);
  const employeesView = filtredEmployees.map(row => (
		<EmployeesListRow key={row._id} row={row} />
  ));
  return (
		<Paper className={className}>
			<NavLink className="link" to="/app/add-employee">
				<PersonAdd fontSize="large" className="icon" />
			</NavLink>
			<Table className="table">
				<TableHead>
					<TableRow>
						<TableCell className="head">Nom</TableCell>
						<TableCell className="head" align="center">
							Prénom
						</TableCell>
						<TableCell className="head" align="center">
							Années D éxperience
						</TableCell>
						<TableCell className="head" align="center">
							Email
						</TableCell>
						<TableCell className="head" align="center">
							Action
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{employeesView}</TableBody>
			</Table>
		</Paper>
  );
};

ManagementList.propTypes = {
  className: PropTypes.string.isRequired,
  filtredEmployees: PropTypes.array.isRequired,
  getAllClients: PropTypes.func.isRequired,
  getAllProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filteredEmployees: getFilteredEmployees(state),
});

export default compose(
  withStyle,
  connect(
    mapStateToProps,
    { getAllClients, getAllProjects },
  ),
)(ManagementList);
