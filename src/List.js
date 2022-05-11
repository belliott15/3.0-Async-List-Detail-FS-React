import React from 'react';
import Item from './Item';

export default function List({ something }) {
  return (
    <div className='list-section'>
      {something.map((something) => <Item key={something.id} something={something} />) }
    </div>
  );
}
