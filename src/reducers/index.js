import { combineReducers } from 'redux';
import users from './users';
import pokemons from './pokemons';

export default combineReducers({
    users,
    pokemons,
});