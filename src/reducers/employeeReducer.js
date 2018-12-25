/* eslint-disable no-underscore-dangle */
import { ALL_EMPLOYEES, CHANGE_SEARCH_CRITERIA, REMOVE_EMPLOYEE } from '../actions/types';


// Definig intial State
const initialState = {
  employees: [],
  searchCriteria: {},
};

const employeeReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ALL_EMPLOYEES: {
      return {
        ...state,
        employees: payload,
      };
    }
    case REMOVE_EMPLOYEE: {
      const { employees } = state;
      return {
        ...state,
        employees: employees.filter((element) => element._id !== payload),
      };
    }
    case CHANGE_SEARCH_CRITERIA: {
      return {
        ...state,
        searchCriteria: payload,
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
