import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import getEmployeeSkills from '../../selectors/skillsSelector';
import { removeSkill } from '../../actions/skillAction';
import EmployeeSkillsList from './EmployeeSkillsList';
import withStyle from './withStyle';

const AddEmployeeSkill = ({ className, skills, removeSkill }) => (
	<div className={className}>
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<div className="column">
					<Typography className="heading">Compétences</Typography>
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className="details">
				<div className="double-column">
					<EmployeeSkillsList skills={skills} onDelete={removeSkill} />
				</div>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	</div>
);

AddEmployeeSkill.propTypes = {
  className: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  removeSkill: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  skills: getEmployeeSkills(state),
});

export default compose(
  withStyle,
  connect(
    mapStateToProps,
    { removeSkill },
  ),
)(AddEmployeeSkill);
