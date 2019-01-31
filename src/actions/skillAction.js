import * as types from './types';

export const getAllSkillSuggestion = () => ({
  type: types.API,
  payload: {
    url: '/skills',
    method: 'get',
    success: ({ skills }) => setAllSuggestion(skills),
  },
});

export const setAllSuggestion = (payload) => ({
  type: types.ALL_SKILLS_SUGGESTION,
  payload,
});

export const setNewSkillSuggestion = (skillSuggestion) => ({
  type: types.ADD_SKILL_SUGGESTION,
  payload: skillSuggestion,
});

export const addSkillSuggestion = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'skills/add',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: ({ skill }) => setNewSkillSuggestion(skill),
  },
});

export const unsetSkillSuggestion = (skillSuggestion) => ({
  type: types.REMOVE_SKILL_SUGGESTION,
  payload: skillSuggestion,
});

export const removeSkillSuggestion = (skillSuggestion) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/skills/delete/${skillSuggestion}`,
    success: () => unsetSkillSuggestion(skillSuggestion),
  },
});

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
    url: 'employee-skills/add',
    data,
    success: ({ employeeSkill }) => setNewSkill(employeeSkill),
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
    url: `/employee-skills/delete/${skill}`,
    success: () => unsetSkill(skill),
  },
});
