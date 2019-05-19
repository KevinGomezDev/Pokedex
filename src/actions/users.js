import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
} from './actionTypes';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});