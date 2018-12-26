/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import api from './api';


export const getAllEmployees = async () => {
  try {
    const { data: { employees } } = await api({
      method: 'get',
      url: '/employees',
    });
    return employees;
  } catch (error) {
    return (error);
  }
};

export const getEmployee = async (empId) => {
  try {
    const { data: { employee } } = await api({
      method: 'get',
      url: `/employees/${empId}`,
    });
    return employee;
  } catch (error) {
    return (error);
  }
};

export const addEmployee = async (employee) => {
  try {
    const newEmployee = { ...employee };
    const { skills } = newEmployee;
    const skillsIds = skills.map((skill) => skill._id);
    newEmployee.skills = skillsIds;
    const data = new FormData();
    const auxData = Object.entries(newEmployee);
    auxData.forEach((element) => {
      data.append(element[0], element[1]);
      console.log(element[0], element[1]);
    });
    const result = await api({
      method: 'post',
      url: '/employees/add',
      data,
    });
    return result;
  } catch (error) {
    return (error);
  }
};

export const updateEmployee = async (employee) => {
  try {
    const newEmployee = { ...employee };
    const { skills } = newEmployee;
    const skillsIds = skills.map((skill) => skill._id);
    newEmployee.skills = skillsIds;
    const data = new FormData();
    const auxData = Object.entries(newEmployee);
    auxData.forEach((element) => {
      data.append(element[0], element[1]);
    });
    const result = await api({
      method: 'post',
      url: '/employees/update',
      data,
    });
    return result;
  } catch (error) {
    return (error);
  }
};


export const removeEmployee = async (empId) => {
  try {
    const result = await api({
      method: 'delete',
      url: `/employees/delete/${empId}`,
    });
    return result;
  } catch (error) {
    return (error);
  }
};
