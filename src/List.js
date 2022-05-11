import React from 'react';

export default function List() {
  return (
    <div>
      {something.map((something) => <Item key={something.id} something={something} />) }
    </div>
  );
}
