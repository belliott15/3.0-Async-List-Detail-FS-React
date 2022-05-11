import React from 'react';

export default function Item({ name, species, image }) {
  return (
    <div className="item-card">
      <h1>{name}</h1>
      <h4>{species}</h4>
      <img src={image} />
    </div>
  );
}
