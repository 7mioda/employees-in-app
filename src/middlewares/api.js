/* eslint-disable consistent-return */
/* eslint-disable no-console */

import cookie from 'react-cookies';
import * as actions from '../actions/types';
import api from '../api/api';
import { dataFetching } from '../actions/uiAction';
import { getRefreshToken } from '../actions/authAction';

// Manages all server requests
const apiMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type !== actions.API) {
    return next(action);
  }
  const token = cookie.load('token');
  const {
    url,
    method,
    success,
    error: errorAction = null,
    data = null,
  } = action.payload;
  dispatch(dataFetching());
  try {
    const { data: result } = await api({
      method,
      url,
      data,
      headers: { Authorization: token },
    });
    dispatch(success(result));
    dispatch(dataFetching());
  } catch (error) {
    dispatch(dataFetching());
    if (
      error.message === 'Request failed with status code 401'
			&& action.payload.url !== 'users/login'
    ) {
      const refreshToken = cookie.load('refreshToken');
      dispatch(getRefreshToken({ refreshToken, successAction: action }));
    }
    if (errorAction) {
      dispatch(errorAction(JSON.stringify(error)));
    }
  }
  return next(action);
};

export default apiMiddleware;
