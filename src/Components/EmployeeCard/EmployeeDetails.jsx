import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import 'moment/locale/fr';
import shortid from 'shortid';

import { setAllSkills } from '../../actions/skillAction';
import { setAllExperiences } from '../../actions/experienceAction';
import getEmployeeSkills from '../../selectors/skillsSelector';
import experienceSelector from '../../selectors/experiencesSelector';
import { openModal } from '../../actions/uiAction';
import withStyle from './withStyle';

moment.locale('fr');

const EmployeeDetails = ({
  className,
  experiences,
  skills,
  employee,
  setAllSkills,
  setAllExperiences,
}) => {
  const {
    firstName,
    image,
    lastName,
    bio,
    hireDate,
    skills: skillsIds,
    experiences: experiencesIds,
  } = employee;
  useEffect(() => {
    setAllSkills(skillsIds);
    setAllExperiences(experiencesIds);
  }, []);
  return (
		<div className={className}>
			{/* Header Section */}
			<Grid container className="sub-container" justify="center" spacing={24}>
				<Grid item xs={12} className="header">
					<img
						src={image}
						style={{
						  height: '50vh',
						  width: '20vw',
						  display: 'inline-block',
						  float: 'right',
						  margin: '0',
						  padding: '0',
						}}
						alt=""
					/>
					<h1 className="typed-text">
						<Typed
							strings={[
							  'Salut !!!!',
							  `Je suis ${firstName} ${lastName}`,
							  `Je suis ${firstName} ${lastName}`,
							  `Je suis un membre du famille oyez ${moment(hireDate).fromNow()}`,
							]}
							smartBackspace={false}
							typeSpeed={30}
							backSpeed={50}
							loop
						/>
					</h1>
				</Grid>
				<Grid item xs={4} style={{ padding: '1em' }} className="container">
					<div className="bottom-border" />
					<div className="top-border" />
					<h2
						style={{
						  display: 'inline-block',
						  float: 'left',
						  width: '100%',
						  paddingRight: '10%',
						  margin: '0',
						}}
					>
						{firstName}
					</h2>
					<h2
						style={{
						  display: 'inline-block',
						  float: 'right',
						  margin: '0',
						  paddingLeft: '40%',
						}}
					>
						{lastName}
					</h2>
					<span style={{ display: 'block' }}>UX/UI Designer</span>
				</Grid>
				<Grid item xs={6} />
				{/* About Section */}
				<Grid item xs={4} />
				<Grid item xs={6} className="container">
					<div className="bottom-border" />
					<div className="top-border" />
					<h2>About Me</h2>
					<p style={{ padding: '1em' }}>{bio}</p>
				</Grid>
			</Grid>
			<Grid
				container
				className="container"
				style={{ width: '80%', marginLeft: '10%', marginTop: '3%' }}
				justify="center"
				spacing={24}
			>
				<div className="bottom-border" />
				<div className="top-border" />
				<Grid item xs={4}>
					{/* Skill Section */}
					<ul className="skill">
						{skills.map(element => (
							<li key={shortid.generate()}>
								{element.skill.name}
								<img
									src={element.skill.logo}
									style={{
									  height: '25px',
									  width: '25px',
									  marginTop: '10px',
									  marginBottom: '10px',
									}}
									alt=""
								/>
							</li>
						))}
					</ul>
				</Grid>
				<Grid item xs={4}>
					{/* Experienes Section */}

					<ul>
						{experiences.map(experience => (
							<li key={experience._id}>
								<h4>
{' '}
{experience.position}
        </h4>
								<h3>
{experience.project.name}
{' '}
        </h3>
								{moment(experience.project.beginDate).format('YYYY-MM-DD')}
{' '}
								{/* eslint-disable-next-line react/no-unescaped-entities */}
>
{' '}
								{moment(experience.project.endDate).format('YYYY-MM-DD')}
								<p>
									{moment(experience.beginDate).format('YYYY-MM-DD')}
{' '}
									{/* eslint-disable-next-line react/no-unescaped-entities */}
>
{' '}
									{moment(experience.endDate).format('YYYY-MM-DD')}
{' '}
								</p>
								<p>{experience.description}</p>
							</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</div>
  );
};

EmployeeDetails.propTypes = {
  className: PropTypes.string.isRequired,
  employee: PropTypes.object.isRequired,
  experiences: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  setAllSkills: PropTypes.func.isRequired,
  setAllExperiences: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.ui.openModal,
  experiences: experienceSelector(state),
  skills: getEmployeeSkills(state),
});

export default compose(
  withStyle,
  withRouter,
  connect(
    mapStateToProps,
    { openModal, setAllSkills, setAllExperiences },
  ),
)(EmployeeDetails);
