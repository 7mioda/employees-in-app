import { AUTH } from '../actions/types';

// Definig intial State
const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
