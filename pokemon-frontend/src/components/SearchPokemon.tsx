import { useState } from "react";
import { agregarPokemon } from "../services/pokemonApi";


export default function SearchPokemon ({ onDiscover }: any) {
    const [name, setName] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const pokemon = await agregarPokemon(name);

        onDiscover(pokemon);

        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Buscar pokemon..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button>
                Buscar
            </button>
        </form>
    )
}