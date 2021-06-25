import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function ProductList({ product }) {
  return (
    <>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>naam</Th>
            <Th>beschrijving</Th>
            <Th isNumeric>porties</Th>
          </Tr>
        </Thead>
        <Tbody>
          {product.map(p => (
            //     <li key={p.id}>
            //       {p.id} - {p.naam} - {p.beschrijving}
            //     </li>
            //   ))}
            <Tr key={p.id}>
              <Td>{p.id}</Td>
              <Td>{p.naam}</Td>
              <Td>{p.beschrijving}</Td>
              <Td isNumeric>{p.porties}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default ProductList;
