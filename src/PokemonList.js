import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div className="poke-list">
      {pokemon.map((poke) => <Pokemon key={poke.id + poke.name} poke={poke}/>)}
    </div>
  );
}
