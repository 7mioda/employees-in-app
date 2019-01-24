/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { removeSkill } from '../../actions/skillAction';
import SkillForm from './SkillForm';
import SkillsList from './SkillsList';
import withStyle from './withStyle';

const AddSkill = ({ className, skills, removeSkill }) => (
  <div className={className}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="column">
          <Typography className="heading">Compétences</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="details">
        <div className="double-column">
          {skills.length > 0 && <SkillsList skills={skills} onDelete={removeSkill} />}
        </div>
        <div className={classNames('column', 'helper')}>
          <SkillForm />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);


AddSkill.propTypes = {
  className: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  removeSkill: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  skills: state.skill.skills,
  removeSkill: state.skill.removeSkill,
});

export default compose(withStyle, connect(mapStateToprops, { removeSkill }))(AddSkill);
