import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';

import getPokemon from './services/fetch-utils';


export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const pokemonPerPage = 25;

  useEffect(() => {
    async function allPokemon(){
      const start = page * pokemonPerPage - pokemonPerPage;
      const end = page * pokemonPerPage;
      const allPokemon = await getPokemon(start, end);
      setPokemon(allPokemon.body);
      setLastPage(allPokemon.lastPage);
    }
    allPokemon();
  }, [page]);
  return (
    <div>
      <h1>Pokemon compendium</h1>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
      <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>Next Page</button>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
