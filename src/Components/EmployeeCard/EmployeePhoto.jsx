/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';

const EmployeePhoto = ({ image }) => (
  <CardMedia
    className="media"
    image={image}
    title="Oyez employee"
  />
);

EmployeePhoto.propTypes = {
  image: PropTypes.string.isRequired,
};


export default EmployeePhoto;
