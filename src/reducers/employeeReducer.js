/* eslint-disable no-underscore-dangle */
import * as actions from '../actions/types';


// Definig intial State
const initialState = {
  employees: [],
  searchCriteria: {
    criteria: 'NAME',
    value: '',
  },
};

const employeeReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_EMPLOYEES: {
      return {
        ...state,
        employees: payload,
      };
    }
    case actions.ADD_EMPLOYEE: {
      const { employees } = state;
      return {
        ...state,
        employees: [payload, ...employees],
      };
    }
    case actions.UPDATE_EMPLOYEE: {
      const { employees } = state;
      return {
        ...state,
        employees: employees.map((element) => {
          if (element._id === payload._id) {
            return payload;
          }
          return element;
        }),
      };
    }
    case actions.REMOVE_EMPLOYEE: {
      const { employees } = state;
      return {
        ...state,
        employees: employees.filter((element) => element._id !== payload),
      };
    }
    case actions.CHANGE_SEARCH_CRITERIA: {
      const { searchCriteria } = state;
      return {
        ...state,
        searchCriteria: { ...searchCriteria, criteria: payload },
      };
    }
    case actions.CHANGE_SEARCH_KEYWORD: {
      const { searchCriteria } = state;
      return {
        ...state,
        searchCriteria: { ...searchCriteria, value: payload },
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
