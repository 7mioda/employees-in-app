/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Link from '@material-ui/icons/Link';
import LinkOff from '@material-ui/icons/LinkOff';
import Edit from '@material-ui/icons/Edit';

import { removeClient } from '../../actions/clientAction';
import withStyle from './withStyle';

const ClientCard = ({
  className, client: {
    _id, name, logo, link, projects,
  }, removeClient,
}) => (
  <Card className={className}>
    <div className="details">
      <div className="controls">
        { link ? <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}><Link className="action-icon" /> </a>
          : <LinkOff />
        }
        <NavLink onClick={(event) => event.stopPropagation()} style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/app/client-details/${_id}` }}>  <Edit className="action-icon" /> </NavLink>
        <DeleteOutline className="action-icon" onClick={(event) => { event.stopPropagation(); removeClient(_id); }} />
        <img style={{ height: '25px', width: '25px' }} src={logo} alt="" />
      </div>
      <CardContent className="content">
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <Button variant="outlined">
            {projects.length}
          </Button>
        </Typography>
      </CardContent>
    </div>
  </Card>
);

ClientCard.propTypes = {
  className: PropTypes.string.isRequired,
  removeClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  removeClient: state.clients.removeClient,
});

export default compose(withStyle, connect(mapStateToProps, { removeClient }))(ClientCard);
