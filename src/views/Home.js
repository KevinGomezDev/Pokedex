import React from 'react';

import { getPokemons, getPokemon } from '../data/api'

import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  state = {
    pokemons: [],
  }
  
  componentDidMount() {
    getPokemons().then((data) =>
      Promise.all(data.results.map(item => getPokemon(item.name)))
      .then(result => this.setState({ pokemons: result }))
    ).catch((error) => console.log(error))
  }

  render() {
    return <React.Fragment>
      <PokemonList pokemons={this.state.pokemons} />
      <SearchBar />
    </React.Fragment>
  }
}

export default Home;