import {
  SEARCH
} from '../constants';

const blogReducer = (state = {}, action) => {
  const {type, payload} = action;

  switch(type) {
    case SEARCH:
      return {...state, searchVal: payload};
    default:
      return state;
  }
};

export default blogReducer;