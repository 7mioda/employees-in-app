/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import employeeReducer from './reducers/employeeReducer';

const middleware = [thunk];

const store = createStore(
  combineReducers({
    auth: authReducer,
    employees: employeeReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
