export async function GET({ params }) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        const res = await fetch(url);
        const data = await res.json();

        const pokemon = data.results.map((data, index) => {
          return {
            name: data.name,
            id: index + 1,
            image: `https://img.pokemondb.net/sprites/red-blue/normal/${data.name}.png`,
          };
        });
    return {
        status: 200,
        body: pokemon
    }
}