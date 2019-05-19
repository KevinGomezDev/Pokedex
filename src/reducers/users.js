import initialState from './initialState';
import { CREATE_USER } from '../actions/actionTypes';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case CREATE_USER:
            return { 
                ...state, 
                data: [...state.data, action.payload ]
            };
        default:
            return state;
    }
};