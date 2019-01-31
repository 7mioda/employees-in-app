import * as types from './types';


export const setAllExperiences = (payload) => ({
  type: types.ALL_EXPERIENCES,
  payload,
});

export const setNewExperience = (experience) => ({
  type: types.ADD_EXPERIENCE,
  payload: experience,
});

export const addExperience = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'experiences/add',
    data,
    success: ({ experience }) => setNewExperience(experience),
  },
});


export const unsetExperience = (experience) => ({
  type: types.REMOVE_EXPERIENCE,
  payload: experience,
});

export const removeExperience = (experience) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/experiences/delete/${experience}`,
    success: () => unsetExperience(experience),
  },
});
