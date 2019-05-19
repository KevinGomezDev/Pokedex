import React from 'react';

import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  componentDidMount() {
    const { fetchPokemons, pokemons } = this.props
    if (pokemons.data.length === 0) {
      fetchPokemons();
    }
  }

  render() {
    const { pokemons } = this.props
    const pokemonsExist = !!pokemons && (pokemons.data.length > 0)
    return pokemonsExist 
      ? <React.Fragment>
        <PokemonList pokemons={pokemons.data} />
        <SearchBar />
      </React.Fragment>
    : <i className="nes-octocat animate"></i>
  }
}

export default Home;