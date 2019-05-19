import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import pokemons from './pokemons';

export default combineReducers({
    user,
    users,
    pokemons,
});