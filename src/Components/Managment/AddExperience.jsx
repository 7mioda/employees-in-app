/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { removeExperience } from '../../actions/experienceAction';
import { getAllExperiences as experienceSelector } from '../../selectors/experiencesSelector';
import ExperiencesList from './ExperiencesList';
import ExperienceForm from './ExperienceForm';
import withStyle from './withStyle';

const AddExperience = ({ className, experiences, removeExperience }) => (
  <div className={className}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="column">
          <Typography className="heading">Expérience Professionnelles</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details">
        <ExperiencesList experiences={experiences} onDelete={removeExperience} />
        <ExperienceForm />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);


AddExperience.propTypes = {
  className: PropTypes.string.isRequired,
  experiences: PropTypes.array,
  removeExperience: PropTypes.func,
};

const mapStateToProps = (state) => ({
  experiences: experienceSelector(state),
  removeExperience: state.experiences.removeExperience,
});

export default compose(withStyle, connect(mapStateToProps, { removeExperience }))(AddExperience);
