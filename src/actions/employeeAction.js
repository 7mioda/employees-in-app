import { ALL_EMPLOYEES, CHANGE_SEARCH_CRITERIA, REMOVE_EMPLOYEE } from './types';
import { getAllEmployees as employeesFetcher } from '../api/employee';

export const getAllEmployees = () => async (dispatch) => {
  const employees = await employeesFetcher();
  dispatch({
    type: ALL_EMPLOYEES,
    payload: employees,
  });
};

export const removeEmployee = (employee) => (dispatch) => {
  dispatch({
    type: REMOVE_EMPLOYEE,
    payload: employee,
  });
};

export const changeSearchCriteria = (criteria) => (dispatch) => {
  dispatch({
    type: CHANGE_SEARCH_CRITERIA,
    payload: criteria,
  });
};
