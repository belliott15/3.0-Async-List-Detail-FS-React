import React from 'react';

export default function Pokemon({ name, type1, type2, generation, legendary }) {
  return (
    <div className="item-card" style={{ background: legendary ? 'gold' : 'beige' }}>
      <h1>{name}</h1>
      <h4>{type1} : {type2}</h4>
      <h4>{generation}</h4>
    </div>
  );
}
