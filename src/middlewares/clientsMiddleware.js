import { ADD_PROJECT, ALL_CLIENTS } from '../actions/types';

const clientsMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === ALL_CLIENTS) {
    const clients = action.payload;
    const newAction = action;
    newAction.clients = clients.map((client) => {
      const projectsIds = client.projects.map((project) => {
        dispatch({ type: ADD_PROJECT, payload: project });
        return project._id;
      });
      const newClient = client;
      newClient.projects = projectsIds;
      return newClient;
    });
    return next(newAction);
  }

  return next(action);
};

export default clientsMiddleware;
