/* eslint-disable no-underscore-dangle */
import * as actions from '../actions/types';


// Definig intial State
const initialState = {
  experiences: [],
};

const experiencesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_EXPERIENCES: {
      return {
        ...state,
        experiences: payload,
      };
    }
    case actions.ADD_EXPERIENCE: {
      const { experiences } = state;
      return {
        ...state,
        experiences: [payload, ...experiences],
      };
    }
    case actions.REMOVE_EXPERIENCE: {
      const { experiences } = state;
      return {
        ...state,
        experiences: experiences.filter((element) => element._id !== payload),
      };
    }
    default:
      return state;
  }
};

export default experiencesReducer;
