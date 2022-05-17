import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ poke }) {
  return (
    <div>
      <Link to={`/detail/${poke.pokemon_id}`} className='link' >
        <div className="poke-card" style={{ 
          background: poke.legendary && '#FFD700'
          || poke.type1 === 'Water' && '#0b8ca3'
          || poke.type1 === 'Fire' && '#d14324'
          || poke.type1 === 'Grass' && '#228520'
          || poke.type1 === 'Bug' && '#7fad4b' 
          || poke.type1 === 'Normal' && '#7f807e' 
          || poke.type1 === 'Poison' && '#7f2f8a'
          || poke.type1 === 'Electric' && '#bdb704'
          || poke.type1 === 'Ground' && '#8f6401'
          || poke.type1 === 'Fairy' && '#cf72c2'
          || poke.type1 === 'Fighting' && '#d43333'
          || poke.type1 === 'Psychic' && '#852aa8'
          || poke.type1 === 'Rock' && '#8a745a'
          || poke.type1 === 'Ghost' && '#645a8a'
          || poke.type1 === 'Ice' && '#69b9cf'
          || poke.type1 === 'Dragon' && '#b36f27'
          || poke.type1 === 'Dark' && '#403f3f'
          || poke.type1 === 'Steel' && '#b6bac2'
          || poke.type1 === 'Steele' && '#b6bac2'
          || poke.type1 === 'Steele' && '#b6bac2'
        }}>
          <h1>{poke.name}</h1>
          {poke.type2 ? <h4><em>Type: </em>{poke.type1} / {poke.type2}</h4>
            : <h4><em>Type: </em>{poke.type1}</h4> 
          }
          <h4>Poke-ID:{poke.id}</h4>
        </div>
      </Link>
    </div>
  );
}
