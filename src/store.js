/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import authReducer from './reducers/authReducer';
import employeeReducer from './reducers/employeeReducer';
import uiReducer from './reducers/uiReducer';
import skillReducer from './reducers/skillReducer';
import logger from './middlewares/logger';
import form from './middlewares/forms';
import api from './middlewares/api';
import auth from './middlewares/auth';

// Definig redux middelwares
const middleware = [logger, auth, form, api];

// Creating app store
const store = createStore(
  combineReducers({
    ui: uiReducer,
    auth: authReducer,
    employees: employeeReducer,
    skill: skillReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
