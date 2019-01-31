/* eslint-disable no-underscore-dangle */
import * as types from './types';
import { openModal } from './uiAction';


export const getAllEmployees = () => ({
  type: types.API,
  payload: {
    url: '/employees',
    method: 'get',
    success: ({ employees }) => setAllEmployees(employees),
  },
});

export const setAllEmployees = (payload) => ({
  type: types.ALL_EMPLOYEES,
  payload,
});

export const setNewEmployee = (employee) => ({
  type: types.ADD_EMPLOYEE,
  payload: employee,
});

export const addEmployee = (data) => {
  const newEmployee = { ...data };
  const { skills, experiences } = newEmployee;
  const skillsIds = skills.map((skill) => skill._id);
  const experiencesIds = experiences.map((experience) => experience._id);
  newEmployee.skills = skillsIds;
  newEmployee.experiences = experiencesIds;
  return ({
    type: types.API,
    payload: {
      method: 'post',
      url: '/employees/add',
      data: newEmployee,
      meta: {
        header: 'multipart/form-data',
      },
      success: ({ employee }) => setNewEmployee(employee),
      error: (error) => openModal({ title: 'error', body: error }),
    },
  });
};

export const setUpdatedEmployee = (employee) => ({
  type: types.UPDATE_EMPLOYEE,
  payload: employee,
});

export const updateEmployee = (data) => {
  const toUpdateEmployee = { ...data };
  const { skills, experiences } = toUpdateEmployee;
  const skillsIds = skills.map((skill) => skill._id);
  const experiencesIds = experiences.map((experience) => experience._id);
  toUpdateEmployee.skills = skillsIds;
  toUpdateEmployee.experiences = experiencesIds;
  return ({
    type: types.API,
    payload: {
      method: 'post',
      url: '/employees/update',
      data: toUpdateEmployee,
      meta: {
        header: 'multipart/form-data',
      },
      success: ({ employee }) => setUpdatedEmployee(employee),
    },
  });
};

export const unsetEmployee = (employee) => ({
  type: types.REMOVE_EMPLOYEE,
  payload: employee,
});

export const removeEmployee = (employee) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/employees/delete/${employee}`,
    success: () => unsetEmployee(employee),
  },
});


export const changeSearchCriteria = (criteria) => ({
  type: types.CHANGE_SEARCH_CRITERIA,
  payload: criteria,
});

export const changeSearchKeyWord = (keyWord) => ({
  type: types.CHANGE_SEARCH_KEYWORD,
  payload: keyWord,
});
