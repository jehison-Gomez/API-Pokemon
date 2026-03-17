import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './schema/pokemon.schema';
import { Model } from 'mongoose';
import axios from 'axios';

@Injectable()
export class PokemonService {

    constructor(
        @InjectModel(Pokemon.name)
        private pokemonModule: Model<Pokemon>,
    ) {}

    async findAll() {
        return this.pokemonModule.find();
    }

    async findPokemon(term: string) {
        let pokemon;

        if (term.match(/^[0-9a-fA-F]{24}$/)) {
            pokemon = await this.pokemonModule.findById(term);

        } else {
            pokemon = await this.pokemonModule.findOne({ name: term.toLowerCase() });
        }

        if (!pokemon) {
            throw new Error('Pokemon no encontrado');
        }
        return pokemon;
    }

    async createFromApi(name: string) {

        const existing = await this.pokemonModule.findOne({ name });

        if (existing) {
            return existing;
        }

        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`,
        );

        const data = response.data;

        const pokemon = new this.pokemonModule({
            name: data.name,
            image: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map(t => t.type.name),
        });

        return pokemon.save();
    }

    async deletePokemon(term: string) {

    let pokemon;

    if (term.match(/^[0-9a-fA-F]{24}$/)) {

        pokemon = await this.pokemonModule.findByIdAndDelete(term);

    } else {

        pokemon = await this.pokemonModule.findOneAndDelete({
        name: term.toLowerCase()
        });

    }

    if (!pokemon) {
        throw new Error("Pokemon no encontrado");
    }

    return pokemon;
    }
}
