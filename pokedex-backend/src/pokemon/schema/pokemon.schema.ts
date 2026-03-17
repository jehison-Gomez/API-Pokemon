import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PokemonDocument = Pokemon & Document;

@Schema()
export class Pokemon {
    @Prop({ unique: true})
    name: string;

    @Prop()
    image: string;

    @Prop()
    height: number;

    @Prop()
    weight: number;

    @Prop([String])
    types: string[];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon); 