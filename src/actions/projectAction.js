import * as types from './types';

export const setAllProjects = payload => ({
  type: types.ALL_PROJECTS,
  payload,
});

export const getAllProjects = () => ({
  type: types.API,
  payload: {
    url: '/projects',
    method: 'get',
    success: ({ projects }) => setAllProjects(projects),
    meta: {
      namespace: 'projects',
      check: true,
    },
  },
});

export const setNewProject = project => ({
  type: types.ADD_PROJECT,
  payload: project,
});

export const addProject = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'projects/add',
    data,
    success: ({ project }) => setNewProject(project),
  },
});

export const unsetProject = project => ({
  type: types.REMOVE_PROJECT,
  payload: project,
});

export const removeProject = project => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/projects/delete/${project}`,
    success: () => unsetProject(project),
  },
});

export const setUpdatedProject = project => ({
  type: types.UPDATE_PROJECT,
  payload: project,
});

export const updateProject = data => ({
  type: types.API,
  payload: {
    method: 'post',
    url: '/projects/update',
    data,
    success: ({ project }) => setUpdatedProject(project),
  },
});
