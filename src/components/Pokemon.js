import React from 'react';

/* PokeAPI Doesn't support Sprites anymore so let's use them locally 
from PokeApi-Sprites package https://github.com/PokeAPI/sprites */
function Pokemon ({ id, name }) {
  return <ul className='pokemon'>
    <li>
      <img alt={name} src={`${process.env.PUBLIC_URL}/assets/sprites/model/${id}.png`} />
      <span>{name}</span>
    </li>
  </ul>
}

export default Pokemon;