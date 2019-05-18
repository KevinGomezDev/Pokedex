import React from 'react';

import PokeList from '../components/PokeList';
import SearchBar from '../components/SearchBar';

const massage = {
  pokemon: (pokemon) => {
    const urlSplitted = pokemon.url.split('/')
    const id = urlSplitted[urlSplitted.length - 2]
    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
    }
  }
}

class Home extends React.Component {
  state = {
    pokemons: [],
  }
  
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((res) => res.json())
    .then((data) => this.setState({ pokemons: data.results.map((result) => massage.pokemon(result))}))
    .catch((error) => console.log(error))
  }

  render() {
    return <React.Fragment>
      <PokeList pokemons={this.state.pokemons} />
      <SearchBar />
    </React.Fragment>
  }
}

export default Home;