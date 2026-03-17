import { useEffect, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import ListarPokemon from "./components/PokemonList";
import { obtenerPokemon } from "./services/pokemonApi";
import "./App.css";

function App() {

  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {

    const data = await obtenerPokemon();

    setPokemons(data);
  };

  const agregarPokemon = (pokemon: any) => {

    setPokemons([...pokemons, pokemon]);
  };

  const eliminarPokemon = (id: string) => {

    setPokemons(
      pokemons.filter(p => p._id !== id)
    );
  };

  return (

    <div className="container">

      <h1>Pokedex</h1>

      <SearchPokemon onDiscover={agregarPokemon} />

      <ListarPokemon
        pokemons={pokemons}
        removePokemon={eliminarPokemon}
      />

    </div>

  );

}

export default App;