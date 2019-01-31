/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import * as R from 'ramda';

const getProjects = (state) => state.projects.projects;
const getExperiences = (state) => state.experiences.experiences;

export const getAllExperiences = createSelector(
  [getExperiences, getProjects],
  (experiences, projects) => {
    const newExperiences = experiences.map((experience) => {
      const newExperience = { ...experience };
      const newProject = R.find(R.propEq('_id', experience.project))(projects) || [];
      newExperience.project = newProject;
      return newExperience;
    });
    return newExperiences;
  }
);
