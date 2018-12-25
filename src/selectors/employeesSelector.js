import { createSelector } from 'reselect';

const getSearchFilter = (state) => state.employees.searchCriteria;
const getEmployees = (state) => state.employees.employees;

export const getFiltredEmployees = createSelector(
  [getSearchFilter, getEmployees],
  (searchCriteria, employees) => {
    const { criteria, value } = searchCriteria;
    switch (criteria) {
      case 'NAME':
        return employees.filter(
          (employee) => employee.firstName.toUpperCase().includes(value.toUpperCase())
        );
      case 'SKILLS':
        return employees.filter((employee) => {
          const { skills } = employee;
          const result = skills.filter(
            (skill) => skill.name.toUpperCase().includes(value.toUpperCase())
          );
          return result.length > 0;
        });
      default:
        return employees;
    }
  }
);
