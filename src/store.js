/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import authReducer from './reducers/authReducer';
import employeeReducer from './reducers/employeeReducer';
import uiReducer from './reducers/uiReducer';
import skillReducer from './reducers/skillReducer';
import clientReducer from './reducers/clientReducer';
import projectReducer from './reducers/projectReducer';
import experiencesReducer from './reducers/experienceReducer';
import logger from './middlewares/logger';
import form from './middlewares/forms';
import api from './middlewares/api';
import auth from './middlewares/auth';
import clientsMiddleware from './middlewares/clientsMiddleware';
import apiCallEnhancer from './middlewares/apiCallEnhancer';

// Definig redux middelwares
const middleware = [
  logger,
  auth,
  form,
  apiCallEnhancer,
  api,
  clientsMiddleware,
];

// Creating app store
const store = createStore(
  combineReducers({
    ui: uiReducer,
    auth: authReducer,
    employees: employeeReducer,
    skill: skillReducer,
    projects: projectReducer,
    clients: clientReducer,
    experiences: experiencesReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
