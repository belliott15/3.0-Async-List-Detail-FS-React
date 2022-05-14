import { client } from './client';

export default async function getPokemon(){
  const { body } = await client
    .from('pokemon')
    .select();

  return body;
}

export async function getPokemonByID(id){
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return response.body;
}