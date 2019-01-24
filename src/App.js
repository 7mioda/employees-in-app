/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllEmployees } from './actions/employeeAction';
import { authorise } from './actions/authAction';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Login from './Components/Login/Login';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import ManagmentList from './Components/Managment/ManagmentList';
import AddEmployee from './Components/Managment/AddEmployee';
import Header from './Components/Header/Header';
import Modal from './Components/Modal/Modal';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import LinearProgress from './Components/Progress/LinearProgress';

//---------------------------------------------
//  Main Screen
//---------------------------------------------
const App = ({ isAuthenticated, getAllEmployees, authorise, isFetching }) => {
  useEffect(() => {
    authorise();
    getAllEmployees();
  }, []);
  return (
    <div>
      <LinearProgress isFetching={isFetching} />
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/app"
              render={() => (
                <React.Fragment>
                  <LeftMenu />
                  <Header />
                  <div style={{ width: '95%', marginTop: '80px', marginLeft: '2%' }}>
                    <Switch>
                      <React.Fragment>
                        <PrivateRoute
                          path="/app/empolyee-managment"
                          component={ManagmentList}
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
                        <Route path="/app/employee-list" render={() => <EmployeeList />} />
                        <PrivateRoute path="/app/add-employee" component={AddEmployee} isAuthenticated={isAuthenticated} />
                      </React.Fragment>
                    </Switch>
                  </div>
                </React.Fragment>
              )}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      <Modal />
    </div>
  );
};


App.propTypes = {
  getAllEmployees: PropTypes.func.isRequired,
  authorise: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToprops = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isFetching: state.ui.isFetching,
  getAllEmployees: state.employees.getAllEmployees,
  authorise: state.auth.authorise,
});

export default connect(mapStateToprops, { getAllEmployees, authorise })(App);
