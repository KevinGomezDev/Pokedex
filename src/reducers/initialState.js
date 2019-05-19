import USERS from '../data/users';

export default {
  pokemons: {
      isFetching: false,
      data: [],
      error: null,
  },
  users: {
    data: USERS,
  }
};