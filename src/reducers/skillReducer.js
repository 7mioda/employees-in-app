/* eslint-disable no-underscore-dangle */
import * as actions from '../actions/types';


// Definig intial State
const initialState = {
  skills: [],
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
    default:
      return state;
  }
};

export default skillsReducer;
