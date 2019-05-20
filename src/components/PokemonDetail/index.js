import React from 'react';
import './pokemonDetail.scss';

function PokemonDetail({ id, height, weight, moves }) {
  return <div className='pokemon-detail'>
      <div><span>Id:</span> {id}</div>
      <div><span>Height:</span> {height}</div>
      <div><span>Weight:</span> {weight}</div>
      <div className='moves-container'>
        <span>Moves:</span>
        <ul className='moves-list nes-list is-circle'>
          {moves.map((move) => <li key={move.move.name}>{move.move.name}</li>)}
        </ul>
      </div>
  </div>
}

export default PokemonDetail;
