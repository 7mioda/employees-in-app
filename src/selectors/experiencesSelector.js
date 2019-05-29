import { createSelector } from 'reselect';
import { find, propEq } from 'ramda';

const getProjects = state => state.projects.projects;
const getExperiences = state => state.experiences.experiences;

export default createSelector(
  [getExperiences, getProjects],
  (experiences, projects) => experiences.map((experience) => {
    const newExperience = { ...experience };
    newExperience.project = find(propEq('_id', experience.project))(projects) || [];
    return newExperience;
  }),
);
