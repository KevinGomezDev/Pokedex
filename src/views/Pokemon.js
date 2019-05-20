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
    return !!pokemon && <React.Fragment>
    <h1 className='pokemon-detail-title'>{`${pokemon.name}`} Details</h1>
    <div className='pokemon-detail-container'>
      <PokemonThumb { ...pokemon } />
      <PokemonDetail {...pokemon} />
    </div>
    <div>POKEDEX</div>
    </React.Fragment>
  }
}

export default Pokemon
