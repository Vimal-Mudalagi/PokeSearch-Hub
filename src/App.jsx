import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const fetches = response.data.results.map((pokemon) =>
          axios.get(pokemon.url)
        );
        Promise.all(fetches).then((responses) => {
          setPokemons(responses.map((response) => response.data));
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2 w-screen h-screen min-h-full bg-black p-4">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          PokéSearch Hub
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="block w-[400px] max-w-lg px-2 py-1 pl-3 pr-8 bg-black text-white rounded-lg border-2  border-white/40 m-1 focus:outline-none  "
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="grow p-2 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
