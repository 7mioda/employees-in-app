/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './withStyle';

const EmployeeSnippet = ({ className, user: { firstName, lastName } }) => (
  <figure className={`${className}  hover snip1104`}>
    <figcaption>
      <h2>{firstName}  <span> {lastName}</span></h2>
    </figcaption>
  </figure>
);

EmployeeSnippet.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

export default withStyle(EmployeeSnippet);
