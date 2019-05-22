/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { contains } from 'ramda';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { openModal } from '../../actions/uiAction';
import { addSkill, getAllSkillSuggestion } from '../../actions/skillAction';
import withStyle from './withStyle';

const EmployeeSkillForm = ({
  className, addSkill, skillsSuggestion, getAllSkillSuggestion, skills, openModal,
}) => {
  const skillsItems = skillsSuggestion.map((
    { _id, name }
  ) => (<MenuItem key={_id} value={_id}>{name}</MenuItem>
  ));
  const skillIds = skills.map((skill) => skill.skill._id);
  useEffect(() => getAllSkillSuggestion(), []);
  return (
    <Formik initialValues={{ skill: '', level: '', expYears: '' }}>
      {({
        handleChange, values: {
          skill, level, expYears,
        },
      }) => (
        <TableRow className={className}>
          <TableCell>
            <Select
              value={skill}
              onChange={handleChange}
              name="skill"
              className="input"
              placeholder="Compétence"
              input={<FilledInput name="age" id="filled-age-simple" />}
            >
              {skillsItems}
            </Select>
          </TableCell>
          <TableCell>
            <Select
              value={level}
              onChange={handleChange}
              name="level"
              className="input"
              placeholder="Niveau"
              input={<FilledInput name="age" id="filled-age-simple" />}
            >
              <MenuItem value="beginner">Débutant</MenuItem>
              <MenuItem value="intermediate">Intermédiaire</MenuItem>
              <MenuItem value="expert">Expert</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <FilledInput
              onChange={handleChange}
              value={expYears}
              name="expYears"
              className="input"
              endAdornment={<InputAdornment position="end">Année</InputAdornment>}
              placeholder="Années d'experience"
            />
          </TableCell>
          <TableCell>
            <Button size="small" color="primary" onClick={() => { if (contains(skill, skillIds)) { openModal({ title: 'Compétences', body: <h4>Compétences existe deja</h4> }); } else { addSkill({ skill, level, expYears }); } }}> Ajouter</Button>
          </TableCell>
        </TableRow>)
      }
    </Formik>
  );
};


EmployeeSkillForm.propTypes = {
  className: PropTypes.string.isRequired,
  addSkill: PropTypes.func.isRequired,
  skillsSuggestion: PropTypes.array,
  getAllSkillSuggestion: PropTypes.func,
};
const mapStateToprops = (state) => ({
  addSkill: state.skill.addSkill,
  skillsSuggestion: state.skill.skillsSuggestion,
});

export default compose(withStyle,
  connect(mapStateToprops, { addSkill, getAllSkillSuggestion, openModal }))(EmployeeSkillForm);
