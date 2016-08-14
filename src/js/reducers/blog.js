import {
  SEARCH
} from '../constants';

const defaultState = {
  searchVal: ''
};

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch(type) {
    case SEARCH:
      return {...state, searchVal: payload};
    default:
      return state;
  }
};

export default blogReducer;