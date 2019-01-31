/* eslint-disable no-underscore-dangle */
import * as actions from '../actions/types';


// Definig intial State
const initialState = {
  skills: [],
  skillsSuggestion: [],
};

const skillsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_SKILLS: {
      return {
        ...state,
        skills: payload,
      };
    }
    case actions.ADD_SKILL: {
      const { skills } = state;
      return {
        ...state,
        skills: [payload, ...skills],
      };
    }
    case actions.REMOVE_SKILL: {
      const { skills } = state;
      return {
        ...state,
        skills: skills.filter((element) => element._id !== payload),
      };
    }
    case actions.ALL_SKILLS_SUGGESTION: {
      return {
        ...state,
        skillsSuggestion: payload,
      };
    }
    case actions.ADD_SKILL_SUGGESTION: {
      const { skillsSuggestion } = state;
      return {
        ...state,
        skillsSuggestion: [payload, ...skillsSuggestion],
      };
    }
    case actions.REMOVE_SKILL_SUGGESTION: {
      const { skillsSuggestion } = state;
      return {
        ...state,
        skillsSuggestion: skillsSuggestion.filter((element) => element._id !== payload),
      };
    }
    default:
      return state;
  }
};

export default skillsReducer;
