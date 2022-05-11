import { client } from 'client.js';

export default async function getSomething(){
  const response = await client
    .from()
    .select();
}