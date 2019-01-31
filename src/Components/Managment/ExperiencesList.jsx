/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Visibility from '@material-ui/icons/Visibility';
import moment from 'moment';


const ExperiencesList = ({ experiences, onDelete }) => {
  const experiencesView = experiences.map((element) => (
    <TableRow key={element._id}>
      <TableCell>
        {element.project.name}
        <NavLink className="link" to={{ pathname: `/app/edit-project/${element.project._id}` }}>
          <Visibility />
        </NavLink>
      </TableCell>
      <TableCell>{element.position}</TableCell>
      <TableCell>{moment(element.beginDate).format('YYYY-MM-DD')}</TableCell>
      <TableCell>{moment(element.endDate).format('YYYY-MM-DD')}</TableCell>
      <TableCell>{element.description}</TableCell>
      <TableCell><DeleteOutline onClick={() => onDelete(element._id)} /></TableCell>
    </TableRow>
  ));
  return (
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell className="head">Project</TableCell>
          <TableCell className="head" align="center">Fonction</TableCell>
          <TableCell className="head" align="center">Debut</TableCell>
          <TableCell className="head" align="center">Fin</TableCell>
          <TableCell className="head" align="center">Description</TableCell>
          <TableCell className="head" align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          experiencesView
        }
      </TableBody>
    </Table>
  );
};

ExperiencesList.propTypes = {
  experiences: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExperiencesList;
