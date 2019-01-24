import * as types from './types';


export const setAllSkills = (payload) => ({
  type: types.ALL_SKILLS,
  payload,
});

export const setNewSkill = (skill) => ({
  type: types.ADD_SKILL,
  payload: skill,
});

export const addSkill = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'skills/add',
    data,
    success: ({ skill }) => setNewSkill(skill),
  },
});


export const unsetSkill = (skill) => ({
  type: types.REMOVE_SKILL,
  payload: skill,
});

export const removeSkill = (skill) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/skills/delete/${skill}`,
    success: () => unsetSkill(skill),
  },
});
