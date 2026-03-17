import { IsString } from "class-validator";


export class DiscoverPokemonDto {
    @IsString()
    name: string;
}