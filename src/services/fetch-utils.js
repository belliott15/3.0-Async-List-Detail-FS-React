import { client } from './client';

export default async function getPokemon(start, end){
  const numberPerPage = 25;
  const response = await client
    .from('pokemon')
    .select('*', { count: 'exact' })
    .range(start, end)
    .order('id', { ascending: true });

  const lastPage = Math.ceil(response.count / numberPerPage);

  return { ...response, lastPage };
}

export async function getPokemonByID(id){
  const response = await client
    .from('pokemon')
    .select()
    .match({ pokemon_id: id })
    .single();

  return response.body;
}