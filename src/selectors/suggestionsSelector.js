import { createSelector } from 'reselect';
import { getFiltredEmployees } from './employeesSelector';

const getSearchFilter = (state) => state.employees.searchCriteria;
const getEmployees = (state) => state.employees.employees;

// calculates suggestion from the user query/searchCriteria
export const getSuggestions = createSelector(
  [getSearchFilter, getEmployees, getFiltredEmployees],
  (searchCriteria, employees, filtredEmployees) => {
    const { criteria, value } = searchCriteria;
    if (value === '') {
      return [];
    }
    switch (criteria) {
      case 'NAME':
        return filtredEmployees.map((employee) => employee.firstName).sort();
      case 'SKILLS':
        return filtredEmployees.map((employee) => {
          const skills = employee.skills.map((skill) => skill.name);
          return skills.toString();
        }).sort();
      default:
        return [];
    }
  }
);
