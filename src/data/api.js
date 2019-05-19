import axios from 'axios'

const LIMIT_REQUEST = 50

const massage = {
  pokemon: (pokemon) => ({
    id: pokemon.id,
    image: pokemon.sprites.front_default,
    height: pokemon.height,
    name: pokemon.name,
    moves: pokemon.moves,
    types: pokemon.types,
    weight: pokemon.weight,
  })
}

export const getPokemons = (offset) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT_REQUEST}&offset=${offset}`)
  .then((response) => response.data)

export const getPokemon = (id) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => massage.pokemon(response.data))
