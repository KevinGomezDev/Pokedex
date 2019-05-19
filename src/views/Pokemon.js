import React from 'react'
import { getPokemon } from '../data/api'

import PokemonThumb from '../components/PokemonThumb/'
import PokemonDetail from '../components/PokemonDetail/'

class Pokemon extends React.Component {
  state = {
    pokemon: null,
  }

  componentDidMount () {
    getPokemon(this.props.match.params.id)
    .then((pokemon) => this.setState({ pokemon }))
    .catch((er) => console.log(er))
  }
  
  render() {
    const { pokemon } = this.state
    return !!pokemon && <div className='pokemon-container'>
      <PokemonThumb { ...pokemon } />
      <PokemonDetail {...pokemon} />
    </div>
  }
}

export default Pokemon
