import {
  LOGIN_USER,
  CREATE_USER,
} from './actionTypes';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});