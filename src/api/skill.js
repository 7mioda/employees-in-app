import api from './api';

export const addSkill = async (skill) => {
  try {
    const { data: { skill: newSkill } } = await api({
      method: 'post',
      url: 'skills/add',
      data: skill,
    });
    return newSkill;
  } catch (error) {
    return (error);
  }
};

export const removeSkill = async (skillId) => {
  try {
    const result = await api({
      method: 'delete',
      url: `/skills/delete/${skillId}`,
    });
    return result;
  } catch (error) {
    return (error);
  }
};
