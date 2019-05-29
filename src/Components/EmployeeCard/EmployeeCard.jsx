import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CSSTransition } from 'react-transition-group';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import EmployeePhoto from './EmployeePhoto';
import EmployeeDetails from './EmployeeDetails';
import EmployeeSnippet from './EmployeeSnippet';
import { openModal } from '../../actions/uiAction';
import withStyle from './withStyle';

const EmployeeCard = ({
  className,
  openModal,
  employee: {
    image,
    firstName,
    lastName,
    bio,
    hireDate,
    skills,
    birthDate,
    experiences,
  },
}) => {
  const [showDetails, toggleshowDetails] = useState(false);
  const body = (
		<EmployeeDetails
			employee={{
			  firstName,
			  lastName,
			  bio,
			  hireDate,
			  skills,
			  birthDate,
			  image,
			  experiences,
			}}
		/>
  );
  return (
		// eslint-disable-next-line max-len
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<div
			className={className}
			onClick={() => openModal({ title: '', body })}
			onMouseLeave={() => toggleshowDetails(false)}
			onMouseEnter={() => toggleshowDetails(true)}
		>
			<CSSTransition
				in={showDetails}
				timeout={300}
				classNames="name"
				unmountOnExit
			>
				<EmployeeSnippet user={{ firstName, lastName }} />
			</CSSTransition>
			<Card className="card">
				<CardActionArea>
					<EmployeePhoto className="media" image={image} />
				</CardActionArea>
			</Card>
		</div>
  );
};

EmployeeCard.propTypes = {
  className: PropTypes.string.isRequired,
  employee: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default compose(
  withStyle,
  connect(
    null,
    { openModal },
  ),
)(EmployeeCard);
