import React from 'react';

function OpbergerList({ opberg }) {
  return (
    <ul>
      {opberg.map(op => (
        <li key={op.id}>
          {op.id} - {op.naam}
        </li>
      ))}
    </ul>
  );
}

export default OpbergerList;
