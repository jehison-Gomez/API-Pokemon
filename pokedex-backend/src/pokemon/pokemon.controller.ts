import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { DiscoverPokemonDto } from './DTO/discover-pokemon.dto';

@Controller('v2')
export class PokemonController {
    constructor(
        private readonly pokemonService: PokemonService
    ) {}

    @Post('agregar')
    discoverPokemon(@Body() discoverPokemonDto: DiscoverPokemonDto) {
        return this.pokemonService.createFromApi(discoverPokemonDto.name);
    }

    @Get('get')
    findAll() {
        return this.pokemonService.findAll();
    }

    @Get(':term')
    findPokemon(@Param('term') term: string) {
        return this.pokemonService.findPokemon(term);
    }

    @Delete(':name')
    removePokemon(@Param('name') name: string) {
        return this.pokemonService.deletePokemon(name);
    }
}

