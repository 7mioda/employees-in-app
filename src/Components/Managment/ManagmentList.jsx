/* eslint-disable no-underscore-dangle */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PersonAdd from '@material-ui/icons/PersonAdd';

import ManagmentRow from './ManagmentRow';
import { getFiltredEmployees } from '../../selectors/employeesSelector';
import withStyle from './withStyle';

const ManagmentList = ({ filtredEmployees, className }) => {
  const employeesView = filtredEmployees.map((row) => <ManagmentRow key={row._id} row={row} />);
  return (
    <Paper className={className}>
      <NavLink className="link" to="/app/add-employee">
        <PersonAdd fontSize="large" className="icon" />
      </NavLink>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="head">Nom</TableCell>
            <TableCell className="head" align="center">Prénom</TableCell>
            <TableCell className="head" align="center">Années D'éxperience</TableCell>
            <TableCell className="head" align="center">Email</TableCell>
            <TableCell className="head" align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { employeesView }
        </TableBody>
      </Table>
    </Paper>
  );
};


ManagmentList.propTypes = {
  className: PropTypes.string.isRequired,
  filtredEmployees: PropTypes.array,
};

const mapStateToprops = (state) => ({
  filtredEmployees: getFiltredEmployees(state),
});

export default compose(withStyle, connect(mapStateToprops))(ManagmentList);
