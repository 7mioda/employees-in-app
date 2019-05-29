import { createSelector } from 'reselect';

const getSearchFilter = state => state.employees.searchCriteria;
const getEmployees = state => state.employees.employees;
//-------------------------------------------------------------------
// calculates /  selects employees from the user query/searchCriteria
//-------------------------------------------------------------------
export default createSelector(
  [getSearchFilter, getEmployees],
  (searchCriteria, employees) => {
    const { criteria, value } = searchCriteria;
    switch (criteria) {
      case 'NAME':
        return employees.filter(employee => employee.firstName
          .toUpperCase()
          .includes(value.toUpperCase()));
      case 'SKILLS':
        return employees.filter((employee) => {
          const { skills } = employee;
          const skillsName = skills.map(skill => skill.name);
          const result = skillsName
            .toString()
            .toUpperCase()
            .includes(value.toUpperCase());
          return result;
        });
      default:
        return employees;
    }
  },
);
