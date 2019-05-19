import initialState from './initialState';
import { REQ_POKEMONS, RCV_POKEMONS, ERR_POKEMONS } from '../actions/actionTypes';

export default (state = initialState.pokemons, action) => {
    switch (action.type) {
        case REQ_POKEMONS:
            return { ...state, isFetching: true };
        case RCV_POKEMONS:
            return { ...state, isFetching: false, data: action.payload };
        case ERR_POKEMONS:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};