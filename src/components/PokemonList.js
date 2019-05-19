import React from 'react';
import Pokemon from './Pokemon';

function PokemonList ({ pokemons }) {
  return <div className='poke-list'>
    {pokemons.map((pokemon) =>
      <Pokemon key={pokemon.id} {...pokemon} />)}
  </div>
}

export default PokemonList

