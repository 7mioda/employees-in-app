/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';

import { addSkill } from '../../actions/skillAction';
import withStyle from './withStyle';

const SkillForm = ({ className, addSkill }) => (
  <Formik initialValues={{ name: '', level: '', expYears: '' }}>
    {({ handleChange, values: { name, level, expYears } }) => (
      <div>
        <div className={className}>
          <Typography variant="caption">Ajouter une compétences</Typography>
          <br />
          <FilledInput
            value={name}
            onChange={handleChange}
            name="name"
            className="input"
            placeholder="compétence"
            style={{ width: '98%' }}
          />
          <br />
          <Select
            value={level}
            onChange={handleChange}
            name="level"
            className="input"
            placeholder="Niveau"
            style={{ width: '98%' }}
            input={<FilledInput name="age" id="filled-age-simple" />}
          >
            <MenuItem value="beginner">Débutant</MenuItem>
            <MenuItem value="intermediate">Intermédiaire</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
          </Select>
          <FilledInput
            onChange={handleChange}
            value={expYears}
            name="expYears"
            className="input"
            endAdornment={<InputAdornment position="end">Année</InputAdornment>}
            placeholder="Années d'experience"
            style={{ width: '94%' }}
          />
          <Button size="small">Annuler</Button>
          <Button
            size="small"
            color="primary"
            onClick={() => addSkill({ name, level, expYears })}
          >
            {' '}
						Ajouter
          </Button>
        </div>
      </div>
    )}
  </Formik>
);

SkillForm.propTypes = {
  className: PropTypes.string.isRequired,
  addSkill: PropTypes.func.isRequired,
};
const mapStateToprops = (state) => ({
  addSkill: state.skill.addSkill,
});

export default compose(
  withStyle,
  connect(
    mapStateToprops,
    { addSkill },
  ),
)(SkillForm);
