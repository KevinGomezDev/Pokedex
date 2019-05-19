import initialState from './initialState';
import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';

export default (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, ...action.payload};
        case LOGOUT_USER:
            return { ...state, ...action.payload};
        default:
            return state;
    }
};