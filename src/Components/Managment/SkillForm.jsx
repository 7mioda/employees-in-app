/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import { addSkillSuggestion } from '../../actions/skillAction';
import withStyle from './withStyle';

const SkillForm = ({ className, addSkillSuggestion }) => {
  const [logo, setLogo] = useState('');
  const handleLogo = ({ target: { files } }) => {
    setLogo(files[0]);
  };
  return (
    <Formik initialValues={{ name: '', logo }}>
      {({
        handleChange, values: {
          name, logo,
        },
      }) => (
        <div>
          <div className={className}>
            <Grid container className="sub-container" spacing={24}>
              <Grid item xs={6}>
                <FilledInput
                  value={name}
                  onChange={handleChange}
                  name="name"
                  className="input"
                  placeholder="compétence"
                  style={{ width: '98%' }}
                />
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
                <Button size="small">Annuler</Button>
                <Button size="small" color="primary" onClick={() => addSkillSuggestion({ name, logo })}> Ajouter</Button>
              </Grid>
            </Grid>
          </div>
        </div>)
      }
    </Formik>
  );
};


SkillForm.propTypes = {
  className: PropTypes.string.isRequired,
  addSkillSuggestion: PropTypes.func.isRequired,
};
const mapStateToprops = (state) => ({
  addSkillSuggestion: state.skill.addSkillSuggestion,
});

export default compose(withStyle, connect(mapStateToprops, { addSkillSuggestion }))(SkillForm);
