/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EmployeeSkillForm from './EmployeeSkillForm';


const SkillsList = ({ skills, onDelete }) => {
  console.log(skills);
  const skillsView = skills.map((element) => (
    <TableRow key={element._id}>
      <TableCell className="tabel-cell">
        {element.skill.name}
        <img className="skill-icon" src={element.skill.logo} alt=""/>
      </TableCell>
      <TableCell>{element.level}</TableCell>
      <TableCell>{element.expYears}</TableCell>
      <TableCell><DeleteOutline onClick={() => onDelete(element._id)} /></TableCell>
    </TableRow>
  ));
  return (
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell className="head">Compétence</TableCell>
          <TableCell className="head" align="center">Niveau</TableCell>
          <TableCell className="head" align="center">Années D'éxperience</TableCell>
          <TableCell className="head" align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <EmployeeSkillForm />
        {
          skillsView
        }
      </TableBody>
    </Table>
  );
};

SkillsList.propTypes = {
  skills: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SkillsList;
