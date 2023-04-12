export async function load({ fetch, params }) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(url);
    const data = await res.json();

    const loadedPokemon = data.results.map((data, index) => {
      return {
        name: data.name,
        id: index + 1,
        image: `https://img.pokemondb.net/sprites/red-blue/normal/${data.name}.png`,
      };
    });

    return { pokemon: loadedPokemon }
}
