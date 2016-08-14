import {
  SEARCH
} from '../constants';

export const search = (searchVal) => {
  return {
    type: SEARCH,
    payload: searchVal
  }
};
