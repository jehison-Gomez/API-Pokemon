import axios from "axios";

const URL = "http://localhost:3000/api/v2";

export const agregarPokemon = async (name: string) => {
    const res = await axios.post(`${URL}/agregar`, {
        name
    });
    return res.data
}

export const obtenerPokemon = async () => {
    const res = await axios.get(`${URL}/get`)

    return res.data;
}

export const EliminarPokemon = async (term: string) => {
    const res = await axios.delete(`${URL}/${term}`);

    return res.data;
}