/* eslint-disable no-console */

// Logs all actions and their informations to the console
const logger = () => next => (action) => {
  console.log(`ACTION: ${action.type}`, action);

  next(action);
};

export default logger;
