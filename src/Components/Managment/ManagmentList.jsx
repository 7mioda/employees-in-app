/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import PersonAdd from '@material-ui/icons/PersonAdd';

import api from '../../api';
import withStyle from './withStyle';

class ManagmentList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    api({
      method: 'get',
      url: '/employees/',
    }).then(async (data) => {
      const { data: { employees } } = data;
      this.setState({
        employees,
      });
    });
  }

  removeEmployee = async (empId) => {
    try {
      await api({
        method: 'delete',
        url: `/employees/delete/${empId}`,
      });
      const { employees } = this.state;
      const newEmployees = employees.filter((element) => element._id !== empId);
      this.setState({ employees: newEmployees });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { employees } = this.state;
    const employeesView = employees.map((row) => (
      <TableRow className="row" key={row._id}>
        <TableCell className="body" align="center">{row.firstName}</TableCell>
        <TableCell className="body" align="center">{row.lastName}</TableCell>
        <TableCell className="body" align="center">{row.expYears}</TableCell>
        <TableCell className="body" align="center">
          {row.email}
        </TableCell>
        <TableCell className="body" align="center">
          <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/app/edit-employee/${row._id}` }}>  <Edit /> </NavLink>
          <DeleteOutline style={{ cursor: 'pointer' }} onClick={() => this.removeEmployee(row._id)} />
        </TableCell>
      </TableRow>
    ));
    const { className } = this.props;
    return (
      <Paper className={className}>
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/app/add-employee">
          <PersonAdd fontSize="large" style={{ float: 'right', margin: '50px' }} />
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
  }
}


ManagmentList.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(ManagmentList);
