import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPokemons, fetchPokemon  } from '../actions/pokemons';
import Home from '../views/Home'

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPokemons,
  fetchPokemon,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);