/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';

const getProjects = (state) => state.projects.projects;
const getSelectedClient = (state, props) => props.clientId;

export const getFiltredProjects = createSelector(
  [getProjects, getSelectedClient],
  (projects, id) => projects.filter((project) => project.client === id)
);
