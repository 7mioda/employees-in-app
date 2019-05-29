import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Pdf from '@material-ui/icons/PictureAsPdf';

import EmployeeDetails from '../EmployeeCard/EmployeeDetails';
import { removeEmployee } from '../../actions/employeeAction';
import { openModal } from '../../actions/uiAction';
import withStyle from './withStyle';

const EmployeeListRow = ({
  className, row, removeEmployee, openModal,
}) => (
	<TableRow
		className={`${className} row`}
		onClick={() => openModal({
		    title: 'Détails employee',
		    body: <EmployeeDetails employee={row} />,
		  })
		}
	>
		<TableCell className="body" align="center">
			{row.firstName}
		</TableCell>
		<TableCell className="body" align="center">
			{row.lastName}
		</TableCell>
		<TableCell className="body" align="center">
			{row.expYears}
		</TableCell>
		<TableCell className="body" align="center">
			{row.email}
		</TableCell>
		<TableCell className="body" align="center">
			<NavLink
				onClick={event => event.stopPropagation()}
				style={{ textDecoration: 'none', color: 'inherit' }}
				to={{ pathname: `/app/cv-generator/${row._id}` }}
			>
				{' '}
				<Pdf className="action-icon" />
{' '}
			</NavLink>
			<NavLink
				onClick={event => event.stopPropagation()}
				style={{ textDecoration: 'none', color: 'inherit' }}
				to={{ pathname: `/app/edit-employee/${row._id}` }}
			>
				{' '}
				<Edit className="action-icon" />
{' '}
			</NavLink>
			<DeleteOutline
				className="action-icon"
				onClick={(event) => {
				  event.stopPropagation();
				  removeEmployee(row._id);
				}}
			/>
		</TableCell>
	</TableRow>
);

EmployeeListRow.propTypes = {
  row: PropTypes.object.isRequired,
  removeEmployee: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default compose(
  withStyle,
  connect(
    null,
    { removeEmployee, openModal },
  ),
)(EmployeeListRow);
