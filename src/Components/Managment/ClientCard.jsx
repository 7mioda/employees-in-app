/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import { removeClient } from '../../actions/clientAction';
import withStyle from './withStyle';

const ClientCard = ({
  className, client: {
    _id,name, logo, link, description,
  }, removeClient,
}) => (
  <Card className={className}>
    <div className="details">
      <CardContent className="content">
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {link}
        </Typography>
      </CardContent>
      <div className="controls">
        <NavLink onClick={(event) => event.stopPropagation()} style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/app/client-details/${_id}` }}>  <Edit className="action-icon" /> </NavLink>
        <DeleteOutline className="action-icon" onClick={(event) => { event.stopPropagation(); removeClient(_id);}} />
      </div>
    </div>
    <CardMedia
      className="cover"
      image={logo}
      title="Live from space album cover"
    />
  </Card>
);

ClientCard.propTypes = {
  className: PropTypes.string.isRequired,
  removeClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  removeClient: state.clients.removeClient,
});

export default compose(withStyle, connect(mapStateToProps, { removeClient }))(ClientCard);
