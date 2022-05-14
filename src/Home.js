import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';

import getPokemon from './services/fetch-utils';


export default function Home() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function allPokemon(){
      const allPokemon = await getPokemon();
      setPokemon(allPokemon);
    }
    allPokemon();
  }, []);
  return (
    <div>
      <h1>Pokemon compendium</h1>
      <button>Previous Page</button>
      <button>Next Page</button>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
