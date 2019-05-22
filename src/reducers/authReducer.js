import { AUTH, LOGOUT } from '../actions/types';

// Defining initial State
const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
