import React from 'react';

function Pokemon ({ name }) {
  return <ul className='pokemon'>
    <li>
      <span>{name}</span>
    </li>
  </ul>
}

function PokemonList (props) {
  return <div className='poke-list'>
    {props.pokemons.map((pokemon) => <Pokemon key={pokemon.name} name={pokemon.name} />)}
  </div>
}

export default PokemonList

