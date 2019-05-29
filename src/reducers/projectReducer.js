/* eslint-disable no-underscore-dangle */
import * as R from 'ramda';
import * as actions from '../actions/types';

// Definig intial State
const initialState = {
  projects: [],
};

const projectsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_PROJECTS: {
      const { projects } = state;
      return {
        ...state,
        projects: R.union(projects, payload),
      };
    }
    case actions.ADD_PROJECT: {
      const { projects } = state;
      return {
        ...state,
        projects: R.union([payload], projects),
      };
    }
    case actions.REMOVE_PROJECT: {
      const { projects } = state;
      return {
        ...state,
        projects: projects.filter(element => element._id !== payload),
      };
    }
    case actions.UPDATE_PROJECT: {
      const { projects } = state;
      return {
        ...state,
        projects: projects.map((project) => {
          if (project._id === payload._id) {
            return payload;
          }
          return project;
        }),
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
