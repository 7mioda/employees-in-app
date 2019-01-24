/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import EmployeeDetails from '../EmployeeCard/EmployeeDetails';
import { removeEmployee } from '../../actions/employeeAction';
import { openModal } from '../../actions/uiAction';
import withStyle from './withStyle';

const ManagmentRow = ({ className, row, removeEmployee, openModal }) => (
  <TableRow className={`${className} row`} onClick={() => openModal({ title: 'Détails employee', body: <EmployeeDetails employee={row} /> })}>
    <TableCell className="body" align="center">{row.firstName}</TableCell>
    <TableCell className="body" align="center">{row.lastName}</TableCell>
    <TableCell className="body" align="center">{row.expYears}</TableCell>
    <TableCell className="body" align="center">
      {row.email}
    </TableCell>
    <TableCell className="body" align="center">
      <NavLink onClick={(event) => event.stopPropagation()} style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/app/edit-employee/${row._id}` }}>  <Edit className="action-icon" /> </NavLink>
      <DeleteOutline className="action-icon" onClick={(event) => { event.stopPropagation(); removeEmployee(row._id); }} />
    </TableCell>
  </TableRow>
);

ManagmentRow.propTypes = {
  row: PropTypes.object.isRequired,
  removeEmployee: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const mapStateToprops = (state) => ({
  removeEmployee: state.employees.removeEmployee,
  openModal: state.employees.openModal,
});

export default compose(withStyle, connect(mapStateToprops, { removeEmployee, openModal }))(ManagmentRow);
