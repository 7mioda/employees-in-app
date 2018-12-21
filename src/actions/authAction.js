import { AUTH } from './types';


export const authorise = () => (dispatch) => {
  dispatch({
    type: AUTH,
  });
};
