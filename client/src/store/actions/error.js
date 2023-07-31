import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export const addError = error => ({
  type: ADD_ERROR,
  error,
});
