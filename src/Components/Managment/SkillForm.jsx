/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as R from 'ramda';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';

import { addSkillSuggestion } from '../../actions/skillAction';
import withStyle from './withStyle';

const SkillForm = (props) => {
  const { className, addSkillSuggestion, skillsSuggestion } = props;
  const [logo, setLogo] = useState('');
  const handleLogo = ({ target: { files } }) => {
    setLogo(files[0]);
  };
  const validate = (values) => {
    const errors = {};
    const skills = [...skillsSuggestion];
    const names = skills.map((skillSuggestion) => skillSuggestion.name.trim().toUpperCase());
    if (R.includes(values.name.trim().toUpperCase(), names)) {
      errors.name = 'Compétences existe déja';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ name: '', logo }}
      validate={validate}
      onSubmit={(values) => {
        addSkillSuggestion({ name: values.name, logo });
      }}
    >
      {({
        handleChange, values: {
          name,
        },
        errors,
        touched,
      }) => (
        <Form>
          <div className={className}>
            <Grid container className="sub-container" spacing={24}>
              <Grid item xs={12}>
                <FilledInput
                  value={name}
                  onChange={handleChange}
                  name="name"
                  className="input"
                  placeholder="compétence"
                  style={{ width: '98%' }}
                />
                {errors.name && touched.name ? (
                  <small style={{ color: 'red', paddingTop: '3px' }}>{errors.name}</small>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <FilledInput
                  placeholder="Logo"
                  name="logo"
                  className="input"
                  value={logo}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  id="contained-button-file"
                  style={{ display: 'none' }}
                  onChange={handleLogo}
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span">
                  Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={6}>
                <Button size="small"> Annuler </Button>
                <Button size="small" color="primary" type="submit" disabled={errors.length}> Ajouter</Button>
              </Grid>
            </Grid>
          </div>
        </Form>)
      }
    </Formik>
  );
};


SkillForm.propTypes = {
  className: PropTypes.string.isRequired,
  addSkillSuggestion: PropTypes.func.isRequired,
  skillsSuggestion: PropTypes.array,
};

export default compose(withStyle, connect(null, { addSkillSuggestion }))(SkillForm);
