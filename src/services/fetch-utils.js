import { client } from './client';

export default async function getPokemon(start, end){
  const numberPerPage = 25;
  const response = await client
    .from('pokemon')
    .select('*', { count: 'exact' })
    .range(start, end);

  const lastPage = Math.ceil(response.count / numberPerPage);

  return { ...response, lastPage };
}

export async function getPokemonByID(id){
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return response.body;
}