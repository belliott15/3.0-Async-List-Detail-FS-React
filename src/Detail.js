import { getByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByID } from './services/fetch-utils';

export default function Detail() {
  const { id } = useParams();
  const [singlePokemon, setSinglePokemon] = useState({});

  useEffect(() => {
    async function getOnePokemon(){
      const currentPokemon = await getPokemonByID(id);
      setSinglePokemon(currentPokemon);
    }
    getOnePokemon();
  }, [id]);
  return (
    <div>
      <h1>{singlePokemon.name}</h1>
      <h6>HP:{singlePokemon.hp} Attack:{singlePokemon.attack}  Defense:{singlePokemon.defense}</h6>
      {singlePokemon.type2 ? <h3>Type: {singlePokemon.type1} / {singlePokemon.type2}</h3> 
        : <h3>Type: {singlePokemon.type1}</h3>}
      <h3>PokeDex ID: {singlePokemon.id}</h3>
      {singlePokemon.legendary && <p style={{ background: 'gold', color: 'darkcyan' }}>Legendary</p>}
    </div>
  );
}
