import React from 'react';

import './pokemonThumb.scss';

import TypeBadge from '../TypeBadge/';
import { Link } from 'react-router-dom';

/* 
  Both local and remote sprites are supported
  local: `${process.env.PUBLIC_URL}/assets/sprites/model/${id}.png` -> https://github.com/PokeAPI/sprites
  remote: props.image
*/

function Pokemon ({ id, name, types, image }) {
  return <div className='pokemon'>
    <Link className='pokemon-link' to={`/pokemon/${id}`}>
      <img alt={name} src={image} />
      <span>{name}</span>
      {types.map((type) => <TypeBadge key={type.type.name} type={type.type.name} />)}
    </Link>
  </div>
}

export default Pokemon;
