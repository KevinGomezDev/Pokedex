import React from 'react';
import TypeBadge from './TypeBadge'

/* 
  Both local and remote sprites can be used 
  local: `${process.env.PUBLIC_URL}/assets/sprites/model/${id}.png` -> https://github.com/PokeAPI/sprites
  remote: props.image
*/

function Pokemon ({ name, types, image }) {
  return <ul className='pokemon'>
    <li>
      <img alt={name} src={image} />
      <span>{name}</span>
      {types.map((type) => <TypeBadge type={type.type.name} />)}
    </li>
  </ul>
}

export default Pokemon;