/* eslint-disable no-underscore-dangle */
import { ALL_CLIENTS, ADD_PROJECT } from '../actions/types';

const clientsMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === ALL_CLIENTS) {
    const clients = action.payload;
    const newAction = action;
    const newClients = clients.map((client) => {
      const projectsIds = client.projects.map((project) => {
        dispatch({ type: ADD_PROJECT, payload: project });
        return project._id;
      });
      const newClient = client;
      newClient.projects = projectsIds;
      return newClient;
    });
    newAction.clients = newClients;
    return next(newAction);
  }

  next(action);
};

export default clientsMiddleware;
