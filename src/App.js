/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authorise } from './actions/authAction';
import { changeSearchCriteria, getAllEmployees, removeEmployee } from './actions/employeeAction';
import { getFiltredEmployees } from './selectors/employeesSelector';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Login from './Components/Login/Login';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import ManagmentList from './Components/Managment/ManagmentList';
import AddEmployee from './Components/Managment/AddEmployee';
import Header from './Components/Header/Header';


const App = ({
  authorise,
  isAuthenticated, changeSearchCriteria, getAllEmployees, filtredEmployees, removeEmployee,
}) => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={() => <Login authorise={authorise} />} />
        <Route
          path="/app"
          render={() => (
            <div>
              <Header changeSearchCriteria={changeSearchCriteria} />
              <Switch>
                <div style={{ width: '95%', marginTop: '80px', marginLeft: '2%' }}>
                  <PrivateRoute
                    path="/app/empolyee-managment"
                    component={ManagmentList}
                    getAllEmployees={getAllEmployees}
                    removeEmployee={removeEmployee}
                    filtredEmployees={filtredEmployees}
                    isAuthenticated={isAuthenticated}
                  />
                  <Route
                    path="/app/edit-employee/:empId"
                    render={({ match: { params: { empId } } }) => (
                      <PrivateRoute
                        component={AddEmployee}
                        empId={empId}
                        isAuthenticated={isAuthenticated}
                      />
                    )}
                  />
                  <Route path="/app/employee-list" render={() => <EmployeeList getAllEmployees={getAllEmployees} filtredEmployees={filtredEmployees} isAuthenticated={isAuthenticated} />} />
                  <PrivateRoute path="/app/add-employee" component={AddEmployee} isAuthenticated={isAuthenticated} />
                </div>
              </Switch>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  </div>
);


App.propTypes = {
  authorise: PropTypes.func.isRequired,
  changeSearchCriteria: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getAllEmployees: PropTypes.func.isRequired,
  removeEmployee: PropTypes.func.isRequired,
  filtredEmployees: PropTypes.array.isRequired,
};

const mapStateToprops = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  authorise: state.auth.authorise,
  changeSearchCriteria: state.employees.changeSearchCriteria,
  searchCriteria: state.employees.searchCriteria,
  employees: state.employees.employees,
  getAllEmployees: state.employees.getAllEmployees,
  removeEmployee: state.employees.removeEmployee,
  filtredEmployees: getFiltredEmployees(state),
});

export default connect(mapStateToprops, {
  authorise, changeSearchCriteria, getAllEmployees, removeEmployee,
})(App);
