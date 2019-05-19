import React from 'react'

function PokemonDetail({ id, height, weight, moves }) {
  return <div className='pokemon-detail'>
    <div><span>Id:</span> {id}</div>
    <div><span>Height:</span> {height}</div>
    <div><span>Weight:</span> {weight}</div>
    <span>Moves:</span>
    <div className='moves-list'>
      {moves.map((move) => <div key={move.move.name}>{move.move.name}</div>)}
    </div>
  </div>
}

export default PokemonDetail