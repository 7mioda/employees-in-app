/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import withStyle from './withStyle';
import { addSkill, removeSkill } from '../../api/skill';

class AddSkill extends PureComponent {
  constructor(props) {
    super(props);
    const { skills } = props;
    this.state = {
      skills,
      name: '',
      expYears: 0,
      level: '',
    };
  }

  componentWillReceiveProps(props) {
    const { skills } = props;
    this.setState({ skills: [...skills] });
  }


  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  addSkill = async () => {
    try {
      const {
        skills, name, expYears, level,
      } = this.state;
      const newSkill = await addSkill({ name, expYears, level });
      console.log(newSkill);
      this.setState({
        skills: [...skills, newSkill],
        name: '',
        expYears: 0,
      });
      const { updateSkills } = this.props;
      updateSkills([newSkill, ...skills]);
    } catch (error) {
      console.log(error);
    }
  }

  removeSkill = async (skillId) => {
    try {
      await removeSkill(skillId);
      const { skills } = this.state;
      const newSkills = skills.filter((element) => element._id !== skillId);
      this.setState({ skills: newSkills });
      const { updateSkills } = this.props;
      updateSkills(newSkills);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { className } = this.props;
    const {
      skills,
      name,
      expYears,
      level,
    } = this.state;
    const skillsView = skills.map((element) => (
      <Chip key={element._id} label={element.name} className="chip" onDelete={() => { console.log(element); this.removeSkill(element._id); }} />
    ));
    return (
      <div className={className}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className="column">
              <Typography className="heading">Compétences
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <div className="double-column">
              {
                skillsView
              }
            </div>
            <div className={classNames('column', 'helper')}>
              <Typography variant="caption">
                Ajouter une compétences
                <br />
              </Typography>
              <FilledInput
                value={name}
                onChange={this.handleChange}
                name="name"
                className="input"
                placeholder="compétence"
                style={{ width: '98%' }}
              />
              <br />
              <Select
                value={level}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={expYears}
                name="expYears"
                className="input"
                endAdornment={<InputAdornment position="end">Année</InputAdornment>}
                placeholder="Années d'experience"
                style={{ width: '94%' }}
              />
              <Button size="small">Annuler</Button>
              <Button size="small" color="primary" onClick={this.addSkill}>
              Valider
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}


AddSkill.propTypes = {
  className: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  updateSkills: PropTypes.func.isRequired,
};

export default withStyle(AddSkill);
