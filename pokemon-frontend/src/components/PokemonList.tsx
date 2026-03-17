import PokemonCard from "./PokemonCard";

export default function ListarPokemon ({ pokemons, removePokemon}: any) {
    return (
        <div className="list">
            {pokemons.map((pokemon: any) => (
                <PokemonCard
                key={pokemon._id}
                pokemon={pokemon}
                onDelete={removePokemon}
                />
                
            ))}
        </div>
    )
}