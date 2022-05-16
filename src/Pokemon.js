import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ poke }) {
  return (
    <div>
      <Link to={`/detail/${poke.id}`} >
        <div className="poke-card" style={{ 
          background: poke.legendary && '#a38c0b'
          || poke.type1 === 'Water' && '#0b8ca3'
          || poke.type1 === 'Fire' && '#d14324'
          || poke.type1 === 'Grass' && '#228520'
          || poke.type1 === 'Bug' && '#7fad4b' 
          || poke.type1 === 'Normal' && '#7f807e' 
          || poke.type1 === 'Poison' && '#7f2f8a'
          || poke.type1 === 'Electric' && '#bdb704'
          || poke.type1 === 'Ground' && '#8f6401'

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
