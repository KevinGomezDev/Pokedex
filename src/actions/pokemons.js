import { getPokemon, getPokemons } from '../data/api'

import {
    REQ_POKEMONS, RCV_POKEMONS, ERR_POKEMONS,
    REQ_POKEMON, RCV_POKEMON, ERR_POKEMON,
} from './actionTypes';

const requestPokemons = () => ({
    type: REQ_POKEMONS,
});

const receivePokemons = (pokemons) => ({
    type: RCV_POKEMONS,
    payload: pokemons,
});

const catchPokemons = (error) => ({
    type: ERR_POKEMONS,
    payload: error,
});

export const fetchPokemons = () => (dispatch) => {
    dispatch(requestPokemons());
    getPokemons()
    .then((data) => Promise.all(data.results.map((item) => getPokemon(item.name))))
    .then((result) => dispatch(receivePokemons(result)))
    .catch((err) => dispatch(catchPokemons(err)));
};

const requestPokemon = (pokemonId) => ({
    type: REQ_POKEMON,
    payload: pokemonId,
});

const receivePokemon = (pokemon) => ({
    type: RCV_POKEMON,
    payload: pokemon,
});

const catchPokemon = (error) => ({
    type: ERR_POKEMON,
    payload: error,
});

export const fetchPokemon = (pokemonId) => (dispatch) => {
    dispatch(requestPokemon(pokemonId));
    getPokemon(pokemonId)
        .then(pokemon => dispatch(receivePokemon(pokemon)))
        .catch(err => dispatch(catchPokemon(err)));
};