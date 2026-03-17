import { EliminarPokemon } from "../services/pokemonApi";

export default function PokemonCard({ pokemon, onDelete }: any) {

  const handleDelete = async () => {

    await EliminarPokemon(pokemon.name);

    onDelete(pokemon._id);
  };

  return (

    <div className="card">

      <img src={pokemon.image} />

      <h3>{pokemon.name}</h3>

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <div>

        {pokemon.types.map((type: string) => (
          <span key={type}>Type:{type} </span>
        ))}

      </div>

      <button onClick={handleDelete}>
        Eliminar
      </button>

    </div>

  );

}