/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/AddToPhotos';

import { removeExperience } from '../../actions/experienceAction';
import { openModal } from '../../actions/uiAction';
import { getAllExperiences as experienceSelector } from '../../selectors/experiencesSelector';
import ExperiencesList from './ExperiencesList';
import ExperienceForm from './ExperienceForm';
import withStyle from './withStyle';

const AddExperience = ({
  className, experiences, removeExperience, openModal,
}) => (
  <div className={className}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="column">
          <Typography className="heading">
             Expérience Professionnelles
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details">
        <AddIcon
          style={{
            position: 'absolute', right: '1%', top: '0', cursor: 'pointer',
          }}
          onClick={() => openModal({ title: 'Ajouter une experience', body: <ExperienceForm /> })}
        />
        <ExperiencesList experiences={experiences} onDelete={removeExperience} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);


AddExperience.propTypes = {
  className: PropTypes.string.isRequired,
  experiences: PropTypes.array,
  removeExperience: PropTypes.func,
  openModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  experiences: experienceSelector(state),
});

export default compose(withStyle,
  connect(mapStateToProps, { removeExperience, openModal }))(AddExperience);
