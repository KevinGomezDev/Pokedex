import React from 'react';
import Pokemon from '../components/Pokemon'

function PokemonList (props) {
  return <div className='poke-list'>
    {props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />)}
  </div>
}

export default PokemonList

