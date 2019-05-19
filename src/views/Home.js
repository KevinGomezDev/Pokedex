import React from 'react';

import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';

function filterPokemons (pokemons, searchTerm) {
  const regex = new RegExp(`^${searchTerm}`);
  if (pokemons.length > 0) {
    return pokemons.filter(pokemon => regex.test(pokemon.name));
  }
}

class Home extends React.Component {
  state = {
    searchTerm: '',
  }

  componentDidMount() {
    const { fetchPokemons, pokemons } = this.props
    if (pokemons.data.length === 0) {
      fetchPokemons();
    }
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { pokemons } = this.props
    const { searchTerm } = this.state
    const pokemonsExist = !!pokemons && (pokemons.data.length > 0)
    const pokemonsData = !!searchTerm ? filterPokemons(pokemons.data, searchTerm) : pokemons.data
    return pokemonsExist 
      ? <React.Fragment>
        <PokemonList pokemons={pokemonsData} />
        <SearchBar onSearch={this.handleSearch} />
      </React.Fragment>
    : <i className="nes-octocat animate"></i>
  }
}

export default Home;