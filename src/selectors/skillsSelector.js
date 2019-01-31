/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import * as R from 'ramda';

const getSkills = (state) => state.skill.skills;
const getSkillsSuggestion = (state) => state.skill.skillsSuggestion;

export const getEmployeeSkills = createSelector(
  [getSkills, getSkillsSuggestion],
  (skills, skillsSuggestion) => {
    const newSkills = skills.map((element) => {
      const newSkill = { ...element };
      const skill = R.find(R.propEq('_id', newSkill.skill))(skillsSuggestion) || [];
      newSkill.skill = skill;
      return newSkill;
    });
    return newSkills;
  }
);
