const logger = store => next => action => {
  const nextStore = next(action);
  console.log(action, store.getState());
  return nextStore;
};

export default logger;
