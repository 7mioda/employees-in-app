/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import ImportantDevices from '@material-ui/icons/ImportantDevices';
import moment from 'moment';
import 'moment/locale/fr';
import shortid from 'shortid';

moment.locale('fr');

const EmployeeDetails = ({
  employee: {
    firstName, lastName, bio, hireDate, skills, birthDate,
  },
}) => (
  <div className="details">
    <h4>{firstName} {lastName}</h4>
    <p>{firstName} a {moment(birthDate).fromNow(true)}</p>
    <p>{bio}</p>
    <p>{firstName} est notre héro en: </p>{skills.map((element) => <Chip style={{ margin: '2px' }} key={shortid.generate()} icon={<ImportantDevices />} label={element.name} />)}
    <p> {firstName} est oyezien  {moment(hireDate).fromNow()} </p>
  </div>
);

EmployeeDetails.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeDetails;
