/* eslint-disable no-underscore-dangle */
import * as actions from '../actions/types';


// Definig intial State
const initialState = {
  clients: [],
};

const clientsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_CLIENTS: {
      return {
        ...state,
        clients: payload,
      };
    }
    case actions.ADD_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        clients: [payload, ...clients],
      };
    }
    case actions.REMOVE_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        clients: clients.filter((element) => element._id !== payload),
      };
    }
    case actions.UPDATE_CLIENT: {
      const { clients } = state;
      return {
        ...state,
        employees: clients.map((client) => {
          if (client._id === payload._id) {
            return payload;
          }
          return client;
        }),
      };
    }
    default:
      return state;
  }
};

export default clientsReducer;
