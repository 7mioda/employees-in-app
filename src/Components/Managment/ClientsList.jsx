import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AddCircle from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';

import { getAllClients } from '../../actions/clientAction';
import ClientCard from './ClientCard';
import withStyle from './withStyle';

const ClientsManagment = ({ className, clients, getAllClients }) => {
  useEffect(() => {
    getAllClients();
  }, []);
  const clientsView = clients.map((element) => (
    <Grid item xs={2} key={element._id}>
      <ClientCard client={element} />
    </Grid>
  ));
  return (
    <Paper className={className}>
      <NavLink className="link" to="/app/add-client">
        <AddCircle fontSize="large" className="icon" />
      </NavLink>
      <Grid container justify="flex-start" spacing={16}>
        {clientsView}
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  getAllClients: state.clients.getAllClients,
});

export default compose(withStyle, connect(mapStateToProps, { getAllClients }))(ClientsManagment);
