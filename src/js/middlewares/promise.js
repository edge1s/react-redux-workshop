const promise = store => next => action => {
  if (typeof action.payload === 'object' && typeof action.payload.then === 'function') {
    // it's promise -> our logic
    action.payload
      .then(response => {
        store.dispatch({...action, payload: response});
      });
    return;
  }

  // it's not a promise
  return next(action);
};

export default promise;