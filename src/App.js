/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authorise } from './actions/authAction';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Login from './Components/Login/Login';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import Header from './Components/Header/Header';


const App = ({ authorise, isAuthenticated }) => (
  <div>
    <Router>
      <Switch>
        <Route path="/login" render={() => <Login authorise={authorise} />} />
        <Route
          path="/app"
          render={() => (
            <div>
              <Header />
              <Switch>
                <div style={{ width: '95%', marginTop: '80px', marginLeft: '2%' }}>
                  <PrivateRoute path="/app/employee-list" component={EmployeeList} isAuthenticated={isAuthenticated} />
                </div>
              </Switch>
            </div>
          )}
        />
      </Switch>
    </Router>
  </div>
);

App.propTypes = {
  authorise: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToprops = (state) => ({
  isAuthenticated: state.isAuthenticated,
  authorise: state.authorise,
});

export default connect(mapStateToprops, { authorise })(App);
