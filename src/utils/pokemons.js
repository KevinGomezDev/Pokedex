export function getPokemonsByName (pokemons, regex) {
  return pokemons.filter((pokemon) => regex.test(pokemon.name));
}

export function getPokemonsByType (pokemons, regex) {
  let pokemonsByType = [];
    for (let index = 0; index < pokemons.length; index++) {
      const pokemon = pokemons[index];
      for (let index = 0; index < pokemon.types.length; index++) {
        const type = pokemon.types[index];
        if(regex.test(type.type.name)) {
          pokemonsByType.push(pokemon);
        }
      }
    }
  return pokemonsByType;
}