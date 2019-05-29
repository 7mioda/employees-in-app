import * as actions from './types';
import { openModal } from './uiAction';


export const login = (data) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/login',
    data,
    success: ({ token, refreshToken }) => authorise(token, refreshToken),
    error: (error) => openModal({ title: 'error', body: error }),
  },
});

export const getRefreshToken = ({ refreshToken: data, successAction }) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/refresh',
    data: {
      refreshToken: data,
    },
    success: ({ token, refreshToken }) => authorise(token, refreshToken, successAction),
    error: (error) => openModal({ title: 'error', body: error }),
  },
});

export const authorise = (token, refreshToken, successAction = null) => ({
  type: actions.AUTH,
  payload: {
    token,
    refreshToken,
    successAction,
  },
});

export const logout = () => ({
  type: actions.LOGOUT,
  payload: {},
});
