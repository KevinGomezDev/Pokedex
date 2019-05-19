import React from 'react';
import Pokemon from '../PokemonThumb/PokemonThumb';

import './pokemonList.scss';

function PokemonList ({ pokemons }) {
  return <div className='pokemon-list'>
    {pokemons.map((pokemon) =>
      <Pokemon key={pokemon.id} {...pokemon} />)}
  </div>
}

export default PokemonList;
