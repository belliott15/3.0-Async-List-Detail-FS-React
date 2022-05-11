import { client } from 'client.js';

export default async function getSomething(){
  const { body } = await client
    .from()
    .select();

  return body;
}

export async function getSomethingByID(id){
  const response = await client
    .from()
    .select()
    .match({ id })
    .single();

  return response. body;
}