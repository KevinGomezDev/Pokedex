import React from 'react';
import Pokemon from './Pokemon';

function PokemonList ({ pokemons }) {
  return <div className='poke-list'>
    {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
    })}
  </div>
}

export default PokemonList

