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
import EmployeesManagmentList from './Components/Managment/EmployeesList';
import ClientsList from './Components/Managment/ClientsList';
import ProjectsList from './Components/Managment/ProjectsList';
import AddEmployee from './Components/Managment/AddEmployee';
import Header from './Components/Header/Header';
import Modal from './Components/Modal/Modal';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import LinearProgress from './Components/Progress/LinearProgress';
import AddProject from './Components/Managment/AddProject';
import AddClient from './Components/Managment/AddClient';
import ClientDetails from './Components/Managment/ClientDetails';
import SkillForm from './Components/Managment/SkillForm';
import SkillsList from './Components/Managment/SkillsList';
import Test from './Components/Calender/Calender';
import CvGenerator from './Components/CuricuriumVitae/CvGenerator';

//---------------------------------------------
//  Main Screen
//---------------------------------------------
const App = ({
  isAuthenticated, getAllEmployees, authorise, isFetching,
}) => {
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
                          component={EmployeesManagmentList}
                          isAuthenticated={isAuthenticated}
                        />
                        <PrivateRoute
                          path="/app/skill-managment"
                          component={SkillsList}
                          isAuthenticated={isAuthenticated}
                        />
                        <PrivateRoute
                          path="/app/projects-managment"
                          component={ProjectsList}
                          isAuthenticated={isAuthenticated}
                        />
                        <PrivateRoute
                          path="/app/clients-managment"
                          component={ClientsList}
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
                        <Route
                          path="/app/client-details/:clientId"
                          render={({ match: { params: { clientId } } }) => (
                            <PrivateRoute
                              component={ClientDetails}
                              clientId={clientId}
                              isAuthenticated={isAuthenticated}
                            />
                          )}
                        />
                        <Route
                          path="/app/edit-client/:clientId"
                          render={({ match: { params: { clientId } } }) => (
                            <PrivateRoute
                              component={AddClient}
                              clientId={clientId}
                              isAuthenticated={isAuthenticated}
                            />
                          )}
                        />
                        <Route
                          path="/app/edit-project/:projectId"
                          render={({ match: { params: { projectId } } }) => (
                            <PrivateRoute
                              component={AddProject}
                              projectId={projectId}
                              isAuthenticated={isAuthenticated}
                            />
                          )}
                        />
                        <Route
                          path="/app/cv-generator/:employeeId"
                          render={({ match: { params: { employeeId } } }) => (
                            <PrivateRoute
                              component={CvGenerator}
                              employeeId={employeeId}
                              isAuthenticated={isAuthenticated}
                            />
                          )}
                        />
                        <Route path="/app/employee-list" render={() => <EmployeeList />} />
                        <Route path="/app/test" render={() => <Test />} />
                        <Route path="/app/add-skill" render={() => <SkillForm />} />
                        <PrivateRoute path="/app/add-employee" component={AddEmployee} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path="/app/add-client" component={AddClient} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path="/app/add-project" component={AddProject} isAuthenticated={isAuthenticated} />
                      </React.Fragment>
                    </Switch>
                  </div>
                </React.Fragment>
              )}
            />
          </Switch>
          <Modal />
        </React.Fragment>
      </BrowserRouter>
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
