import initialState from './initialState';
import { ADD_USER } from '../actions/actionTypes';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, ...action.payload};
        default:
            return state;
    }
};