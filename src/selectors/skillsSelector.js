import { createSelector } from 'reselect';
import { find, propEq } from 'ramda';

const getSkills = state => state.skill.skills;
const getSkillsSuggestion = state => state.skill.skillsSuggestion;

export default createSelector(
  [getSkills, getSkillsSuggestion],
  (skills, skillsSuggestion) => skills.map((element) => {
    const newSkill = { ...element };
    newSkill.skill = find(propEq('_id', newSkill.skill))(skillsSuggestion) || [];
    return newSkill;
  }),
);
